<#
.SYNOPSIS
    Export Windows logon events (4624, 4625, 4740) to a CSV the Log Analyzer understands.

.DESCRIPTION
    Reads the Security event log with Get-WinEvent, pulls the named fields out of
    each event's XML (TargetUserName, IpAddress, LogonType, Status, SubStatus...)
    and writes one row per event. Read-only: it changes nothing on the system.

    Run from an elevated PowerShell session on a domain controller or server
    (reading the Security log requires administrator rights or membership in
    "Event Log Readers"). Then open the CSV in the Log Analyzer page; the file
    is processed locally in the browser.

.PARAMETER Hours
    How far back to look. Default: 24.

.PARAMETER ComputerName
    Optional remote computer to query (requires remote event log access).

.PARAMETER Path
    Output CSV path. Default: .\logon-events.csv

.EXAMPLE
    .\Export-LogonEvents.ps1 -Hours 12 -Path C:\Temp\logons.csv
#>
[Diagnostics.CodeAnalysis.SuppressMessageAttribute('PSAvoidUsingWriteHost', '', Justification = 'Single status line for interactive use.')]
[CmdletBinding()]
param(
    [ValidateRange(1, 720)]
    [int]$Hours = 24,

    [string]$ComputerName,

    [string]$Path = '.\logon-events.csv'
)

$filter = @{
    LogName   = 'Security'
    Id        = 4624, 4625, 4740
    StartTime = (Get-Date).AddHours(-$Hours)
}

$query = @{ FilterHashtable = $filter; ErrorAction = 'Stop' }
if ($ComputerName) { $query.ComputerName = $ComputerName }

try {
    $events = Get-WinEvent @query
}
catch [System.Exception] {
    if ($_.Exception.Message -match 'No events were found') {
        Write-Warning "No matching events in the last $Hours hour(s)."
        return
    }
    throw
}

$rows = foreach ($evt in $events) {
    # Event data fields are stored as <Data Name="...">value</Data> in the XML.
    $xml  = [xml]$evt.ToXml()
    $data = @{}
    foreach ($field in $xml.Event.EventData.Data) { $data[$field.Name] = $field.'#text' }

    # 4740 (account locked out) uses different field names than 4624/4625.
    $workstation = if ($evt.Id -eq 4740) { $data['TargetDomainName'] } else { $data['WorkstationName'] }
    $domain      = if ($evt.Id -eq 4740) { $data['SubjectDomainName'] } else { $data['TargetDomainName'] }

    [pscustomobject]@{
        TimeCreated      = $evt.TimeCreated.ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ss.fffZ')
        EventID          = $evt.Id
        TargetUserName   = $data['TargetUserName']
        TargetDomainName = $domain
        IpAddress        = $data['IpAddress']
        LogonType        = $data['LogonType']
        Status           = $data['Status']
        SubStatus        = $data['SubStatus']
        WorkstationName  = $workstation
    }
}

$rows | Sort-Object TimeCreated | Export-Csv -Path $Path -NoTypeInformation -Encoding UTF8
Write-Host ("Exported {0} event(s) to {1}" -f @($rows).Count, (Resolve-Path $Path))
