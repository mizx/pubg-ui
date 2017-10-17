#!/usr/bin/env bash

. env/bin/activate
PYTHONPATH=. python debugserver/main.py --autoreload=True
