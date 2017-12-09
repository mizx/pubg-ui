# ATTRIBUTION: 
# https://www.humankode.com/asp-net-core/develop-locally-with-https-self-signed-certificates-and-asp-net-core
# https://stackoverflow.com/questions/801967/how-can-i-find-the-source-path-of-an-executing-script/6985381#6985381

. ./shared.ps1

$ErrorActionPreference = "Stop"

# setup certificate properties including the commonName (DNSName) property for Chrome 58+
$certificate = New-SelfSignedCertificate `
    -Subject localhost `
    -DnsName localhost, "prod-live-front.playbattlegrounds.com", "prod-live-entry.playbattlegrounds.com", "playbattlegrounds.com", "test-live-front.playbattlegrounds.com" `
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

# set certificate password here
$pfxPassword = ConvertTo-SecureString -String $pw -Force -AsPlainText


# create pfx certificate
Export-PfxCertificate -Cert $certificatePath -FilePath $pfxFilePath -Password $pfxPassword
Export-Certificate -Cert $certificatePath -FilePath $cerFilePath

$error.clear()
try {
    # import the pfx certificate
    Import-PfxCertificate -FilePath $pfxFilePath Cert:\LocalMachine\My -Exportable -Password $pfxPassword
    
    # trust the certificate by importing the pfx certificate into your trusted root
    Import-Certificate -FilePath $cerFilePath -CertStoreLocation Cert:\CurrentUser\Root
} catch {
    echo "`n`n`nError detected`n`n`n"
    
    throw
    Exit
}

## optionally delete the physical certificates (don’t delete the pfx file as you need to copy this to your app directory)
## Remove-Item $pfxFilePath
#Remove-Item $cerFilePath

echo "`n`n`nNow running convert-certs.ps1`n`n`n"

$error.clear()
try {
    . ./convert-certs.ps1
} catch {
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

pause