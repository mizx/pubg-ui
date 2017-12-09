from __future__ import print_function
import logging

from tornado.gen import coroutine
from tornado.httpclient import HTTPRequest
from tornado.httputil import url_concat
from tornado.websocket import websocket_connect
from tornado.websocket import WebSocketHandler

from debugserver.lib.config import config


"""
If not adding as root cert, be advised that:

    "When using a secure websocket connection (wss://) with a self-signed certificate, the
    connection from a browser may fail because it wants to show the "accept this certificate"
    dialog but has nowhere to show it. You must first visit a regular HTML page using the same
    certificate to accept it before the websocket connection will succeed."
        http://www.tornadoweb.org/en/stable/websocket.html
"""


class GameWebSocketHandler(WebSocketHandler):
    _required_fields = ['provider', 'ticket', 'playerNetId', 'cc', 'clientGameVersion']
    _connection = None

    @coroutine
    def open(self):
        """Handle new inbound websocket connection from game UI
        """
        logging.info("[websocket] open - opening")

        # Fail validation if any required query parameters are missing
        fields = {k: self.get_argument(k) for k in self._required_fields}

        # Build URL with query params
        websocket_url = url_concat(config.websocket.ssl.url, fields)

        request = HTTPRequest(url=websocket_url, validate_cert=False)
        self._connection = yield websocket_connect(
            url=request,
            # ping_interval=30,
            # connect_timeout=_connect_timeout,
        )
        self.set_nodelay(True)
        logging.info("[websocket] open - success")

        self.message_callback_coroutine()

    def on_message(self, message):
        """Receive new inbound messages from game UI

        :param message: inbound websocket message
        """
        logging.info(u"[websocket] on_message - received from client: " + message)

        if not self._connection:
            logging.info("[websocket] on_message - could not forward to remote game server :(")
            return

        self._connection.write_message(message)

    def on_close(self):
        """Websocket has closed

        :return:
        """
        logging.info("[websocket] on_close")

        # Close connection with game server, if it's open
        if self._connection:
            self._connection.close()
        self._connection = None

    def check_origin(self, origin):
        # origin = urllib.parse.urlparse(origin)
        # origin = origin.netloc
        # return origin.endswith("playbattlegrounds.com") or origin.startswith("localhost")
        return True

    @coroutine
    def message_callback_coroutine(self):
        """Handle websocket data from game server

        :type message: UTF-8, Binary, None
        :param message: Data from server, or None if the websocket has been closed/disconnected.
        """
        while True:
            message = yield self._connection.read_message()

            logging.info('[websocket] Data received from remote server: '.format(message))

            if message is None:
                logging.warning('[websocket] Disconnected by remote game server')

                # Since the game server closed its connection to us, close our connection with the client
                self.close(500, 'Connection closed by game server')
                return  # nit: could also break

            # Pass through message to the game UI
            self.write_message(message)
