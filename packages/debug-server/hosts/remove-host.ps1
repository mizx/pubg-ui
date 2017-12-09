$hostname = $args[0]


$hostname_escaped = [Regex]::Escape($hostname)
$localhost = "127.0.0.1"
$localhost_escaped = [Regex]::Escape($localhost)
$filename = "$($env:windir)\system32\Drivers\etc\hosts"

$error.clear()
try {
    (Get-Content $filename) -replace ("^\s*(127.0.0.1\s+$hostname_escaped)", "# `$1") |
        Out-File $filename -Force

} catch [System.UnauthorizedAccessException] {
    Write-Host "`n`n`n"
    Write-Host "Permissions Error detected"
    Write-Host "- Make sure to re-run this as administrator"
    Write-Host "- (Right click script -> Run as Administrator"
    Write-Host "`n`n`n" 
    throw
}

if (!$error) {
    Write-Host "`n`n`nCompleted successfully`n`n`n"
}
