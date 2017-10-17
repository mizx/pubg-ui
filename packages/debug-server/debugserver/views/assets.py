from __future__ import print_function

import tornado.web


class AssetsFileHandler(tornado.web.StaticFileHandler):
    def set_extra_headers(self, path):
        # Disable cache
        self.set_header(
            'Cache-Control',
            'no-store, no-cache, must-revalidate, max-age=0',
        )
