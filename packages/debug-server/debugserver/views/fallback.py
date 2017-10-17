from __future__ import print_function
import re
import tornado.gen

from debugserver.views.common import CommonRequestHandler


class FallbackRedirectHandler(CommonRequestHandler):
    index_regex = re.compile(r".*/(index-steam.*.html)")

    @tornado.gen.coroutine
    def get(self):
        response = yield self.proxy()
        if response.code == 304:
            self.set_status(304)
            return
        elif response.code != 200:
            import pdb; pdb.set_trace()
            raise response.error

        self.write(response.body)