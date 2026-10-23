# Invoke-ADHygieneAudit.ps1

A **read-only** PowerShell audit of Active Directory user accounts that finds the
account-hygiene problems that most often show up in security reviews and
helpdesk clean-up work.

| Check | What it finds | Default severity |
|---|---|---|
| `Stale` | Enabled accounts with no logon in `-StaleDays` (90) days | Medium |
| `NeverLoggedOn` | Enabled accounts older than `-NewAccountGraceDays` (30) that were never used | Medium |
| `PwdNeverExpires` | Enabled accounts with *Password never expires* | Medium |
| `PwdNotRequired` | Enabled accounts with the `PASSWD_NOTREQD` flag | High |
| `OldPassword` | Enabled accounts whose password is older than `-PasswordAgeDays` (365) | Low |
| `DisabledInGroups` | Disabled accounts that are still members of groups | Low |

Accounts with `adminCount = 1` (current or former members of protected admin
groups) are marked **Privileged** and their findings are raised one severity level.

## Requirements

* Windows PowerShell 5.1 or PowerShell 7+
* RSAT **ActiveDirectory** module (`Get-ADUser`)
* Read access to the directory (normal domain users can usually read these attributes)

## Usage

```powershell
# Whole domain, default thresholds
.\Invoke-ADHygieneAudit.ps1

# One OU, stricter stale threshold, custom output path
.\Invoke-ADHygieneAudit.ps1 -SearchBase "OU=Staff,DC=corp,DC=example" -StaleDays 60 -OutputPath C:\Reports\staff.csv

# Work with the results in the pipeline
.\Invoke-ADHygieneAudit.ps1 -PassThru | Where-Object Privileged | Format-Table
```

Full help: `Get-Help .\Invoke-ADHygieneAudit.ps1 -Full`

## Output

* A CSV with one row per finding: Check, Severity, SamAccountName, Name,
  Enabled, Privileged, LastLogonDate, PasswordLastSet, Groups, Detail,
  Recommendation, DistinguishedName.
* A console summary of counts per check and a list of High/Critical findings.

See `example-output.csv` and `example-console-output.txt`. **These are examples
generated from fictional mock accounts, not from a real environment.**

## Testing without Active Directory

`Test-WithMockData.ps1` defines a stand-in `Get-ADUser` that returns fictional
users covering every check, runs the audit and asserts the expected findings:

```powershell
.\Test-WithMockData.ps1
# PASS  8 findings as expected (privileged account escalated to High).
```

The audit script only imports the ActiveDirectory module when `Get-ADUser` is
not already defined, which is what makes this mock test possible.

## Notes and limitations

* **Read-only.** The script never modifies accounts. Recommendations are for a
  human to review and act on through normal change control.
* `LastLogonDate` comes from `lastLogonTimestamp`, which replicates with a delay
  of up to about 14 days, so it is fine for stale-account reviews but not exact.
* Service accounts often legitimately have non-expiring passwords; the fix is
  usually moving them to group Managed Service Accounts (gMSA).
* Checked with PSScriptAnalyzer (no warnings) and the mock test on PowerShell 7.4.
  It has not been run against a production domain.
