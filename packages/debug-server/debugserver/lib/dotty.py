from __future__ import print_function


# REF: https://gist.github.com/ktaragorn/9cf6d368378b0f65a3a0
class AttrDict(object):
    def __init__(self, dct):
        self.dict = dct

    def __repr__(self):
        return repr(self.dict)

    def __getattr__(self, attr):
        try:
            val = self.dict[attr]
            if isinstance(val, dict):
                val = AttrDict(val)
            return val
        except KeyError as e:
            raise AttributeError
