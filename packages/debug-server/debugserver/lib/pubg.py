from __future__ import print_function

import logging
from re import search

import tornado.httpclient

from debugserver.lib.config import config, index_url


def get_folder():
    """Return paths for current UI version

    ```
    $ curl https://prod-live-front.playbattlegrounds.com/index.html
        <script>
            var url = window.location.search;
            url = url.replace("?", '');
            location.href='https://prod-live-front.playbattlegrounds.com/2017.09.14-2017.10.13-592/index-steam.2017.09.14-2017.10.13-592.html?'+url;
        </script>

    # folder: 2017.09.14-2017.10.13-592
    # index: index-steam.2017.09.14-2017.10.13-592.html
    ```
    :rtype tuple(folder, index)
    """
    match_str = r".*\.com/(.*)/(.*)\?.*"

    blocking_http_client = tornado.httpclient.HTTPClient()  # blocking
    result = blocking_http_client.fetch(index_url, follow_redirects=False)
    if result.code != 200:
        logging.error("HTTP request failed, {}".format(result))
        raise result.error

    match = search(match_str, result.body)
    if not match:
        logging.error("Failed to match url")
        return

    folder, index = match.groups()
    return folder, index
