$pw="YourSecurePassword"
$opensslpath="C:\Program Files\Git\mingw64\bin"

$tmpPathCerts = "generated"

$env:path = $env:path + ";" + $opensslpath

function Get-ScriptDirectory {
    Split-Path $script:MyInvocation.MyCommand.Path
}

$tmpPath = Get-ScriptDirectory
if ([string]::IsNullOrEmpty($tmpPath) -Or [string]::IsNullOrEmpty($tmpPathCerts)) {
    throw "Path could not be determined"
    exit
}
$tmpPath = Join-Path $tmpPath $tmpPathCerts

if(!(Test-Path $tmpPath)){
    New-Item -ItemType Directory -Force -Path $tmpPath
}

$pfxFilePath = Join-Path $tmpPath "cert-windows.pfx"
$cerFilePath = Join-Path $tmpPath "cert-windows.cer"