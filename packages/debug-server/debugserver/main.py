#!/usr/bin/env python
from __future__ import print_function

import logging
import os

import tornado.httpserver
import tornado.ioloop
import tornado.web
from tornado.options import define, options

from debugserver.lib.config import assets_dir, base_url, config
from debugserver.lib.logger import setup_logging
from debugserver.lib.pubg import get_folder
from debugserver.views.index import IndexHandler
from debugserver.views.log import LogHandler
from debugserver.views.fallback import FallbackRedirectHandler
from debugserver.views.websocket import WebSocketHandler


define("port", default=config.server.port, help="run on the given port", type=int)
define("debug", default=config.server.debug, help="run in debug mode")
define("autoreload", default=False, help="Autoreload code on change. "
       "If true, enables auto-reloading and disables multi-core")
define("windows", default=False, help="Windows support, to enable SSL when autoreload is disabled")
define("ssl", default=False, help="Use SSL (can use SSL on any port)")
define("stdout", default=True, help="Log to console (in addition to file)")
define("pretty_print", default=False, help="Pretty print output (includes color codes that may not be supported in Windows)")


def make_app():
    folder, index = get_folder()
    logging.info("Found UI version {}".format(folder))

    app = tornado.web.Application(
        [
            (r"/favicon.ico", tornado.web.ErrorHandler, {'status_code': 404}),
            (
                r"/(index.html)?$",
                tornado.web.RedirectHandler,
                {"url": "{}/{}".format(folder, index)},
            ),
            (r".*/index-steam.*.html", IndexHandler),
            (r"/log", LogHandler),
            (r"/userproxy", WebSocketHandler),
            (r"/.*", FallbackRedirectHandler),
        ],
        debug=options.debug,
        serve_traceback=False,
        static_url_prefix='/' + config.server.assets.base + '/',
        static_path=assets_dir,
        autoreload=options.autoreload,
        websocket_ping_interval=30,
    )
    return app


def main():
    setup_logging()
    options.parse_command_line()

    app = make_app()

    ssl_options = {
        "certfile": os.path.abspath(config.server.ssl.certificate),
        "keyfile": os.path.abspath(config.server.ssl.private_key),
    }
    settings = {}
    if options.ssl:
        settings['ssl_options'] = ssl_options

    logging.info("Autoreload: {}".format("Enabled" if options.autoreload else "Disabled"))
    logging.info("SSL: {}".format("Enabled" if options.ssl else "Disabled"))

    # proc_count = 1 if options.windows else 0
    # if options.autoreload:
    #   # spawn single instance
    #   app.listen(options.port)
    # else:
    #   # spawn multiple

    service = tornado.httpserver.HTTPServer(app, **settings)
    # service.bind(options.port)
    # service.start(proc_count)
    service.listen(options.port)
    
    logging.info("Starting on: {protocol}://{domain}:{port}".format(
        protocol="https" if options.ssl else "http",
        domain="localhost",
        port=options.port,
    ))
    
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()
