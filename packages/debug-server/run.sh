#!/usr/bin/env bash

if [[ -z "$VIRTUAL_ENV" && -d "env" ]]; then
    source env/bin/activate
fi
PYTHONPATH=. python debugserver/main.py --autoreload=True --port=3001