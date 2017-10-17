#!/usr/bin/env python
from __future__ import print_function

import logging

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


define("port", default=config.server.port, help="run on the given port", type=int)
define("debug", default=config.server.debug, help="run in debug mode")
define("autoreload", default=False, help="Autoreload code on change. "
       "If true, enables auto-reloading and disables multi-core")


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
            (r"/.*", FallbackRedirectHandler),
        ],
        debug=options.debug,
        serve_traceback=False,
        static_url_prefix='/' + config.server.assets + '/',
        static_path=assets_dir,
        autoreload=options.autoreload,
    )
    return app


def main():
    setup_logging()
    options.parse_command_line()
    app = make_app()

    logging.info("Starting server on port {}. Auto-reload={}".format(
        options.port, options.autoreload))

    if options.autoreload:
        # spawn single instance
        app.listen(options.port)
    else:
        # spawn multiple
        service = tornado.httpserver.HTTPServer(app)
        service.bind(options.port)
        service.start(0)

    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    main()
