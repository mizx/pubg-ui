# ATTRIBUTION: https://www.sslshopper.com/ssl-converter.html

pw="YourSecurePassword"


openssl pkcs12 -in cert-windows.pfx -nocerts -out cert.key -nodes -passin pass:"$pw"
openssl pkcs12 -in cert-windows.pfx -nokeys  -out cert.pem -nodes -passin pass:"$pw"

# remove password from key
openssl rsa -in cert.key -out cert-no-password.key -passin pass:"$pw"

read -n 1 -s -r -p "Press any key to continue"