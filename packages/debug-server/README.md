# Setup

Run the following:

```
virtualenv env
source env/bin/activate
python setup.py install
```

# Running

```
. env/bin/activate
python debug-server.py --port=3001
```

# Troubleshooting
Test call:
```
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3001/log
```
