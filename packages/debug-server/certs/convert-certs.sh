# ATTRIBUTION: https://www.sslshopper.com/ssl-converter.html

PW="YourSecurePassword"


openssl pkcs12 -in cert-windows.pfx -nocerts -out cert.key -nodes -passin pass:"$PW"
openssl pkcs12 -in cert-windows.pfx -nokeys  -out cert.pem -nodes -passin pass:"$PW"

# remove password from key
openssl rsa -in cert.key -out cert-no-password.key -passin pass:"$PW"

read -n 1 -s -r -p "Press any key to continue"