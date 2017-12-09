from __future__ import print_function

import logging
import os
import sys

from tornado.options import options

from debugserver.lib.config import config


log_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')


def setup_logging():
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.INFO)

    file_handler = logging.FileHandler(config.logging.filename)
    file_handler.setFormatter(log_format)
    root_logger.addHandler(file_handler)
    
    if options.stdout:
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setFormatter(log_format)
        root_logger.addHandler(console_handler)

    logging.info("Logging to: {}".format(os.path.abspath(config.logging.filename)))