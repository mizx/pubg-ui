from __future__ import print_function

import logging
import os
import sys

from tornado.options import options


LOGFILE = "output.log"

def setup_logging():
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.INFO)
    format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    file_handler = logging.file_handler(LOGFILE)
    file_handler.setFormatter(format)
    root_logger.addHandler(file_handler)
    
    if options.stdout:
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setFormatter(format)
        root_logger.addHandler(console_handler)

    logging.info("Logging to: {}".format(os.path.abspath(LOGFILE)))