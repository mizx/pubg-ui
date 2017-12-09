from __future__ import print_function

import os

import tornado.gen

from debugserver.lib.config import config, assets_embedded_dir
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
        
        def assets(path):
            js_files = []
            css_files = []
            for asset in os.listdir(path):
                if asset.endswith('.js'):
                    js_files.append(asset)
                elif asset.endswith('.css'):
                    css_files.append(asset)
            return js_files, css_files
        
        output = response.body
        
        js_files, css_files = assets(config.server.assets.base)
        if js_files:
            output = inject_string(output, '<head>', self.render_linked_js(js_files))
        if css_files:
            output = inject_string(output, '<head>', self.render_linked_css(css_files))

        # order of insertion (linked, embedded) matters due to inject_string
        embedded_js_files, embedded_css_files = assets(config.server.assets.embedded)
        if embedded_js_files:
            embedded_js_string = self.render_embed_js([
                open(os.path.join(assets_embedded_dir, f), 'r').read() 
                for f in embedded_js_files
            ])
            output = inject_string(output, '<head>', embedded_js_string)
        if embedded_css_files:
            embedded_css_string = self.render_embed_css([
                open(os.path.join(assets_embedded_dir, f), 'r').read() 
                for f in embedded_css_files
            ])
            output = inject_string(output, '<head>', embedded_css_string)

        self.clear_header("Content-Length")
        self.write(output)
