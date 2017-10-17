from __future__ import print_function
import os
import yaml

from debugserver.lib.dotty import AttrDict


with open('config/base.yaml', 'r') as f:
    config = AttrDict(yaml.safe_load(f))

assets_dir = os.path.realpath(os.path.join(
    os.getcwd(),
    config.server.assets,
))
base_url = "{}://{}".format(config.url.protocol, config.url.hostname)
index_url = "{}/index.html".format(base_url)