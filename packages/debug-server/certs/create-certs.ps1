# ATTRIBUTION: 
# https://www.humankode.com/asp-net-core/develop-locally-with-https-self-signed-certificates-and-asp-net-core
# https://stackoverflow.com/questions/801967/how-can-i-find-the-source-path-of-an-executing-script/6985381#6985381

$pw = "YourSecurePassword"

$ErrorActionPreference = "Stop"

function Get-ScriptDirectory {
    Split-Path $script:MyInvocation.MyCommand.Path
}


# setup certificate properties including the commonName (DNSName) property for Chrome 58+
$certificate = New-SelfSignedCertificate `
    -Subject localhost `
    -DnsName localhost, "prod-live-front.playbattlegrounds.com", "prod-live-entry.playbattlegrounds.com", "playbattlegrounds.com" `
    -KeyAlgorithm RSA `
    -KeyLength 2048 `
    -NotBefore (Get-Date) `
    -NotAfter (Get-Date).AddYears(2) `
    -CertStoreLocation "cert:CurrentUser\My" `
    -FriendlyName "Certificate for debug-server pubg-ui" `
    -HashAlgorithm SHA256 `
    -KeyUsage DigitalSignature, KeyEncipherment, DataEncipherment `
    -TextExtension @("2.5.29.37={text}1.3.6.1.5.5.7.3.1") 
$certificatePath = 'Cert:\CurrentUser\My\' + ($certificate.ThumbPrint)  

# # create temporary certificate path
# $tmpPath = "C:\tmp"
# If(!(test-path $tmpPath))
# {
# New-Item -ItemType Directory -Force -Path $tmpPath
# }

$tmpPath = Get-ScriptDirectory
$pfxFilePath = "$tmpPath\cert-windows.pfx"
$cerFilePath = "$tmpPath\cert-windows.cer"

# set certificate password here
$pfxPassword = ConvertTo-SecureString -String $pw -Force -AsPlainText

# create pfx certificate
Export-PfxCertificate -Cert $certificatePath -FilePath $pfxFilePath -Password $pfxPassword
Export-Certificate -Cert $certificatePath -FilePath $cerFilePath

try {
    # import the pfx certificate
    Import-PfxCertificate -FilePath $pfxFilePath Cert:\LocalMachine\My -Exportable -Password $pfxPassword
    
    # trust the certificate by importing the pfx certificate into your trusted root
    Import-Certificate -FilePath $cerFilePath -CertStoreLocation Cert:\CurrentUser\Root
} catch {
    echo "`n`n`nError detected`n`n`n"
    throw
}
# # optionally delete the physical certificates (don’t delete the pfx file as you need to copy this to your app directory)
## Remove-Item $pfxFilePath
# Remove-Item $cerFilePath

echo "`n`n`nCompleted successfully`n`n`n"
echo "Now run convert-c\erts.sh"

pause