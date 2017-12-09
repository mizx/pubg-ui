# ATTRIBUTION: https://www.sslshopper.com/ssl-converter.html
. ./shared.ps1

$keyFilePath = Join-Path $tmpPath "cert.key"
$pemFilePath = Join-Path $tmpPath "cert.pem"
$keyNoPwdFilePath = Join-Path $tmpPath "cert-no-password.key"

openssl pkcs12 -in $pfxFilePath -nocerts -out $keyFilePath -nodes -passin pass:"$pw"
openssl pkcs12 -in $pfxFilePath -nokeys  -out $pemFilePath -nodes -passin pass:"$pw"

# remove password from key
openssl rsa -in $keyFilePath -out $keyNoPwdFilePath -passin pass:"$pw"

pause