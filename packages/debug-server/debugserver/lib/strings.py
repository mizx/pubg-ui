from __future__ import print_function


def inject_string(haystack, needle, insert_string):
    """Return a string with an injected value right after the matched needle

    :param str haystack: string to search and inject additional string into
    :param str needle: string to search for
    :param str insert_string: string to inject
    """
    return haystack.replace(needle, needle + '\n' + insert_string, 1)
