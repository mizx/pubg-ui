from __future__ import print_function

import tornado.gen
import tornado.httpclient

from debugserver.lib.config import base_url, config


class CommonHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        for (k, v) in {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        }.iteritems():
            self.set_header(k, v)

    def options(self):
        self.set_default_headers()


class CommonRequestHandler(CommonHandler):
    @tornado.gen.coroutine
    def proxy(self):
        http_client = tornado.httpclient.AsyncHTTPClient()
        headers = self.request.headers.copy()
        headers.update({'Host': config.url.hostname})

        query = tornado.httpclient.HTTPRequest(
            base_url + self.request.uri,
            follow_redirects=True,
        )
        query.headers.clear()
        query.headers.update(headers)

        response = yield http_client.fetch(query, raise_error=False)
        for k, v in response.headers.items():
            self.set_header(k, v)
        raise tornado.gen.Return(response)
