#!/usr/bin/env python
from __future__ import print_function

import json
import logging
import sys

import tornado.web
import tornado.ioloop

from pygments import highlight, lexers, formatters
from tornado.options import define, options


define("port", default=3001, help="run on the given port", type=int)
define("debug", default=True, help="run in debug mode")


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")


class LogHandler(tornado.web.RequestHandler):
    def prepare(self):
        content_type = self.request.headers.get("Content-Type")
        if content_type and content_type.startswith("application/json"):
            self.json_args = tornado.escape.json_decode(self.request.body)
        else:
            self.json_args = None

    def options(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')

    def post(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')

        if not self.json_args:
            self.set_status(400)
            return

        pretty_print = json.dumps(self.json_args, indent=4, sort_keys=True)
        print(highlight(
            pretty_print,
            lexers.JsonLexer(),
            formatters.TerminalFormatter(),
        ))


def setup_logging():
    logging.basicConfig(
        stream=sys.stdout,
        level=logging.DEBUG,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    )


def main():
    setup_logging()

    options.parse_command_line()
    app = tornado.web.Application(
        [
            (r"/", MainHandler),
            (r"/log", LogHandler),
        ],
        debug=options.debug,
    )
    app.listen(options.port)
    logging.info("Starting server")
    try:
        tornado.ioloop.IOLoop.instance().start()
    except KeyboardInterrupt:
        tornado.ioloop.IOLoop.instance().stop()


if __name__ == "__main__":
    main()
