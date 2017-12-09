# Setup

Run the following:

```
# Optional (virtualenv)
virtualenv env
source env/bin/activate

# Required
python setup.py install
```


# Running debug-server
To execute the debug-server and listen over SSH, perform the steps "SSL Support", then execute `run-ssh.sh`.

# SSL Support
It's recommended to not use any certs provided in the repo, and instead generate your own. To do so:
- Download the main https://git-scm.com/download/win
- While installing, choose `mingw64` bash terminal, and OpenSSL when prompted.
  - Automatic Method:
    - In `packages/debug-server/hosts`, right click `add-host.bat` and click "Run as Administrator".
      - Should say "Completed successfully"
    - In `packages/debug-server/certs`, right click `create-certs.bat` and click "Run as Administrator".
      - Should say "Completed successfully"
    - Done 
  - Manual method:
    - In `packages/debug-server/hosts`, run:
      - `openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout certs/myserver.key -out certs/myserver.pem`
    - Todo: add manual steps

# Troubleshooting
Test call:
```
# HTTPS
# todo:

# HTTP
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3001/log
```
