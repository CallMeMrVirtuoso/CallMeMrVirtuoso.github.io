<#
.SYNOPSIS
    Read-only Active Directory account hygiene audit.

.DESCRIPTION
    Finds user accounts that commonly lead to security findings and helpdesk
    clean-up work:

      * Stale           Enabled accounts with no logon in -StaleDays days
      * NeverLoggedOn   Enabled accounts older than -NewAccountGraceDays that never logged on
      * PwdNeverExpires Enabled accounts with "Password never expires"
      * PwdNotRequired  Enabled accounts with the PASSWD_NOTREQD flag
      * OldPassword     Enabled accounts whose password is older than -PasswordAgeDays
      * DisabledInGroups Disabled accounts that are still members of groups

    Accounts with adminCount=1 (current or former members of protected admin
    groups) are marked Privileged and their findings are raised one severity level.

    The script only READS from Active Directory (Get-ADUser). It never changes
    accounts. Results are written to a CSV and summarized in the console.

    Note: LastLogonDate comes from lastLogonTimestamp, which replicates with a
    delay of up to ~14 days by design, so it is accurate enough for stale-account
    reviews but not for exact "last seen" times.

.PARAMETER StaleDays
    Days without a logon before an enabled account is considered stale. Default 90.

.PARAMETER NewAccountGraceDays
    Ignore never-logged-on accounts created within this many days. Default 30.

.PARAMETER PasswordAgeDays
    Flag enabled accounts whose password is older than this. Default 365.

.PARAMETER SearchBase
    Optional OU distinguished name to limit the audit, e.g. "OU=Staff,DC=corp,DC=example".

.PARAMETER Server
    Optional domain controller to query.

.PARAMETER OutputPath
    CSV path for the findings. Default: .\ADHygiene-<timestamp>.csv

.PARAMETER PassThru
    Also return the finding objects to the pipeline.

.EXAMPLE
    .\Invoke-ADHygieneAudit.ps1
    Audits the whole domain with default thresholds.

.EXAMPLE
    .\Invoke-ADHygieneAudit.ps1 -SearchBase "OU=Staff,DC=corp,DC=example" -StaleDays 60 -OutputPath C:\Reports\staff.csv

.NOTES
    Requirements: RSAT ActiveDirectory module and read access to the directory
    (any authenticated domain user can normally read these attributes).
    Author: Alex Smith
#>
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSAvoidUsingWriteHost', '', Justification = 'Colored console summary for interactive use; data goes to the CSV and pipeline.')]
[CmdletBinding()]
param(
    [ValidateRange(1, 3650)] [int]$StaleDays = 90,
    [ValidateRange(0, 3650)] [int]$NewAccountGraceDays = 30,
    [ValidateRange(1, 3650)] [int]$PasswordAgeDays = 365,
    [string]$SearchBase,
    [string]$Server,
    [string]$OutputPath = (Join-Path -Path (Get-Location) -ChildPath ("ADHygiene-{0:yyyyMMdd-HHmm}.csv" -f (Get-Date))),
    [switch]$PassThru
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Load the AD module unless Get-ADUser is already available (lets the script be tested with mock cmdlets).
if (-not (Get-Command -Name Get-ADUser -ErrorAction SilentlyContinue)) {
    Import-Module ActiveDirectory -ErrorAction Stop
}

$now        = Get-Date
$properties = 'Enabled', 'LastLogonDate', 'PasswordLastSet', 'PasswordNeverExpires', 'PasswordNotRequired',
              'whenCreated', 'MemberOf', 'adminCount', 'Description'

$query = @{ Filter = '*'; Properties = $properties }
if ($SearchBase) { $query.SearchBase = $SearchBase }
if ($Server)     { $query.Server = $Server }

Write-Verbose "Querying Active Directory users..."
$users = @(Get-ADUser @query)
Write-Verbose ("Retrieved {0} user account(s)." -f $users.Count)

$severityOrder = @('Low', 'Medium', 'High', 'Critical')

function Get-GroupName {
    # Turn "CN=Helpdesk,OU=Groups,DC=corp,DC=example" into "Helpdesk".
    param([string]$DistinguishedName)
    if ($DistinguishedName -match '^CN=((?:\\,|[^,])+)') { return $Matches[1] -replace '\\,', ',' }
    return $DistinguishedName
}

function ConvertTo-Finding {
    param($User, [string]$Check, [string]$Severity, [string]$Detail, [string]$Recommendation)

    $privileged = ($User.adminCount -eq 1)
    if ($privileged) {
        # Privileged accounts get one level higher severity.
        $index    = [Math]::Min($severityOrder.IndexOf($Severity) + 1, $severityOrder.Count - 1)
        $Severity = $severityOrder[$index]
    }

    [pscustomobject]@{
        Check             = $Check
        Severity          = $Severity
        SamAccountName    = $User.SamAccountName
        Name              = $User.Name
        Enabled           = $User.Enabled
        Privileged        = $privileged
        LastLogonDate     = $User.LastLogonDate
        PasswordLastSet   = $User.PasswordLastSet
        Groups            = (@($User.MemberOf) | Where-Object { $_ } | ForEach-Object { Get-GroupName -DistinguishedName $_ }) -join '; '
        Detail            = $Detail
        Recommendation    = $Recommendation
        DistinguishedName = $User.DistinguishedName
    }
}

$findings = foreach ($u in $users) {
    $groups = @($u.MemberOf | Where-Object { $_ })

    if ($u.Enabled) {
        if ($u.LastLogonDate) {
            $idle = [int]($now - $u.LastLogonDate).TotalDays
            if ($idle -ge $StaleDays) {
                ConvertTo-Finding -User $u -Check 'Stale' -Severity 'Medium' -Detail "No logon for $idle days" -Recommendation 'Confirm with the manager, then disable and move to a disabled-users OU.'
            }
        }
        elseif ($u.whenCreated -and ($now - $u.whenCreated).TotalDays -ge $NewAccountGraceDays) {
            $age = [int]($now - $u.whenCreated).TotalDays
            ConvertTo-Finding -User $u -Check 'NeverLoggedOn' -Severity 'Medium' -Detail "Created $age days ago and never used" -Recommendation 'Verify the account is needed; disable if it was never handed over.'
        }

        if ($u.PasswordNeverExpires) {
            ConvertTo-Finding -User $u -Check 'PwdNeverExpires' -Severity 'Medium' -Detail 'Password is set to never expire' -Recommendation 'Use a managed service account (gMSA) for services, or apply the normal password policy.'
        }

        if ($u.PasswordNotRequired) {
            ConvertTo-Finding -User $u -Check 'PwdNotRequired' -Severity 'High' -Detail 'PASSWD_NOTREQD flag is set (account may have an empty password)' -Recommendation 'Clear the flag: Set-ADUser <user> -PasswordNotRequired $false, then set a password.'
        }

        if ($u.PasswordLastSet -and ($now - $u.PasswordLastSet).TotalDays -ge $PasswordAgeDays) {
            $pwdAge = [int]($now - $u.PasswordLastSet).TotalDays
            ConvertTo-Finding -User $u -Check 'OldPassword' -Severity 'Low' -Detail "Password is $pwdAge days old" -Recommendation 'Rotate the password; review why it has not changed.'
        }
    }
    elseif ($groups.Count -gt 0) {
        ConvertTo-Finding -User $u -Check 'DisabledInGroups' -Severity 'Low' -Detail ("Disabled but still in {0} group(s)" -f $groups.Count) -Recommendation 'Remove group memberships so the account cannot regain access if re-enabled.'
    }
}
$findings = @($findings | Sort-Object @{ Expression = { $severityOrder.IndexOf($_.Severity) }; Descending = $true }, Check, SamAccountName)

# ---- Output ----
$findings | Export-Csv -Path $OutputPath -NoTypeInformation -Encoding UTF8

Write-Host ''
Write-Host 'AD account hygiene audit' -ForegroundColor Cyan
Write-Host ('  Accounts scanned : {0}' -f $users.Count)
Write-Host ('  Findings         : {0} across {1} account(s)' -f $findings.Count, @($findings.SamAccountName | Sort-Object -Unique).Count)
Write-Host ''
$findings | Group-Object Check | Sort-Object Count -Descending |
    Format-Table @{ Label = 'Check'; Expression = { $_.Name } }, Count -AutoSize | Out-Host
$findings | Where-Object { $_.Severity -in 'High', 'Critical' } |
    Format-Table Severity, Check, SamAccountName, Privileged, Detail -AutoSize -Wrap | Out-Host
Write-Host ("Full results: {0}" -f $OutputPath) -ForegroundColor Green

if ($PassThru) { $findings }
