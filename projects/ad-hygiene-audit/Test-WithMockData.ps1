<#
.SYNOPSIS
    Runs Invoke-ADHygieneAudit.ps1 against FICTIONAL mock accounts (no Active Directory needed).

.DESCRIPTION
    Defines a stand-in Get-ADUser that returns made-up users covering every check,
    runs the audit, and verifies the expected findings. This is how the example
    output on the project page was produced. Works on Windows PowerShell 5.1 and PowerShell 7.
#>
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSAvoidUsingWriteHost', '', Justification = 'Test result output.')]
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSAvoidGlobalVars', '', Justification = 'The mock cmdlet must be global so the audit script can see it.')]
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSUseShouldProcessForStateChangingFunctions', '', Justification = 'Builds in-memory objects only.')]
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSReviewUnusedParameter', '', Justification = 'Mock mirrors the real Get-ADUser parameters.')]
param()
$ErrorActionPreference = 'Stop'
$now = Get-Date

function New-MockUser {
    param($Sam, $Enabled = $true, $LastLogonDaysAgo, $PwdSetDaysAgo = 30, $CreatedDaysAgo = 400,
          [switch]$NeverExpires, [switch]$NotRequired, [string[]]$Groups = @(), $AdminCount = $null)
    [pscustomobject]@{
        SamAccountName       = $Sam
        Name                 = $Sam
        DistinguishedName    = "CN=$Sam,OU=Users,DC=lab,DC=example"
        Enabled              = $Enabled
        LastLogonDate        = $(if ($null -ne $LastLogonDaysAgo) { $now.AddDays(-$LastLogonDaysAgo) } else { $null })
        PasswordLastSet      = $now.AddDays(-$PwdSetDaysAgo)
        PasswordNeverExpires = [bool]$NeverExpires
        PasswordNotRequired  = [bool]$NotRequired
        whenCreated          = $now.AddDays(-$CreatedDaysAgo)
        MemberOf             = @($Groups | ForEach-Object { "CN=$_,OU=Groups,DC=lab,DC=example" })
        adminCount           = $AdminCount
        Description          = 'Fictional test account'
    }
}

$global:ADHygieneMockUsers = @(
    New-MockUser 'jdoe'        -LastLogonDaysAgo 2                                       # healthy
    New-MockUser 'kpatel'      -LastLogonDaysAgo 5                                       # healthy
    New-MockUser 'old.contractor' -LastLogonDaysAgo 211
    New-MockUser 'svc_backup'  -LastLogonDaysAgo 1 -NeverExpires -PwdSetDaysAgo 900
    New-MockUser 'svc_print'   -LastLogonDaysAgo 3 -NeverExpires -PwdSetDaysAgo 120
    New-MockUser 'it.admin2'   -LastLogonDaysAgo 130 -AdminCount 1 -Groups 'Domain Admins'
    New-MockUser 'temp.kiosk'  -NotRequired -LastLogonDaysAgo 10
    New-MockUser 'new.hire'    -CreatedDaysAgo 5                                         # new, never logged on: ignored
    New-MockUser 'unused.test' -CreatedDaysAgo 180
    New-MockUser 'former.emp'  -Enabled $false -LastLogonDaysAgo 300 -Groups 'VPN Users', 'Finance-Share'
    New-MockUser 'former.emp2' -Enabled $false -LastLogonDaysAgo 400                      # disabled, no groups: ignored
)

# Stand-in for the ActiveDirectory module cmdlet. Accepts the same parameters the audit uses.
function global:Get-ADUser {
    param($Filter, $Properties, $SearchBase, $Server)
    $global:ADHygieneMockUsers
}

$out = Join-Path ([IO.Path]::GetTempPath()) 'adhygiene-test.csv'
$findings = & (Join-Path $PSScriptRoot 'Invoke-ADHygieneAudit.ps1') -OutputPath $out -PassThru

# ---- Assertions ----
$expected = @(
    'Stale:old.contractor', 'Stale:it.admin2', 'PwdNeverExpires:svc_backup', 'PwdNeverExpires:svc_print',
    'OldPassword:svc_backup', 'PwdNotRequired:temp.kiosk', 'NeverLoggedOn:unused.test', 'DisabledInGroups:former.emp'
)
$actual = @($findings | ForEach-Object { "$($_.Check):$($_.SamAccountName)" })
$missing = $expected | Where-Object { $_ -notin $actual }
$extra   = $actual   | Where-Object { $_ -notin $expected }
$adminSeverity = ($findings | Where-Object SamAccountName -eq 'it.admin2').Severity

if ($missing -or $extra -or $adminSeverity -ne 'High') {
    Write-Host "FAIL  missing: $($missing -join ', ')  extra: $($extra -join ', ')  admin severity: $adminSeverity" -ForegroundColor Red
    exit 1
}
Write-Host "PASS  $($findings.Count) findings as expected (privileged account escalated to High). CSV: $out" -ForegroundColor Green
Remove-Item function:\Get-ADUser; Remove-Variable ADHygieneMockUsers -Scope Global
