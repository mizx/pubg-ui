#!/usr/bin/env bash

if [ -d "env" ]; then
    source env/bin/activate
fi
PYTHONPATH=. python debugserver/main.py --autoreload=False --port=443 --windows=True --ssl=True