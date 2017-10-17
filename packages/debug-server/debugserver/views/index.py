from __future__ import print_function

import os

import tornado.gen

from debugserver.lib.config import config
from debugserver.lib.strings import inject_string
from debugserver.views.common import CommonRequestHandler


class IndexHandler(CommonRequestHandler):
    @tornado.gen.coroutine
    def get(self):
        response = yield self.proxy()
        if response.code == 304:
            self.set_status(304)
            return
        elif response.code != 200:
            raise response.error

        js_files = []
        css_files = []
        for asset in os.listdir(config.server.assets):
            if asset.endswith('.js'):
                js_files.append(asset)
            elif asset.endswith('.css'):
                css_files.append(asset)

        output = response.body
        if js_files:
            output = inject_string(output, '<head>', self.render_linked_js(js_files))
        if css_files:
            output = inject_string(output, '<head>', self.render_linked_css(css_files))

        self.clear_header("Content-Length")
        self.write(output)
