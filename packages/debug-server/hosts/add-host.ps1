$hostname = $args[0]

$hostname_escaped = [Regex]::Escape($hostname)   
$localhost = "127.0.0.1"
$localhost_escaped = [Regex]::Escape($localhost)
$filename = "$($env:windir)\system32\Drivers\etc\hosts"
[regex]$regex = "[\s|#]*($localhost_escaped\s+$hostname_escaped)"

$error.clear()
try {
    If ((Get-Content -Raw -erroraction stop $filename) -notmatch $regex) {
        ac -Encoding UTF8 $filename "`n$localhost $hostname"
    } Else {
        (Get-Content $filename) -replace ($regex, "`$1") |
            Out-File $filename -Force
    }
} catch [System.UnauthorizedAccessException] {
    echo "`n`n`n"
    echo "Permissions Error detected"
    echo "- Make sure to re-run this as administrator"
    echo "- (Right click script -> Run as Administrator"
    echo "`n`n`n"
    throw
}

if (!$error) {
    echo "`n`n`nCompleted successfully`n`n`n"
}