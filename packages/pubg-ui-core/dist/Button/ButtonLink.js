"use strict";
import React from 'react';
var handleClick = function (url, type) {
    return function (event) {
        switch (type) {
            case 'platform': {
                window.engine.trigger('ShowWebPageOnPlatform', url);
                return;
            }
            case 'external': {
                window.engine.trigger('OpenExternalBrowser', url);
                return;
            }
        }
    };
};
export var ButtonLink = function (props) {
    var children = props.children, _a = props.type, type = _a === void 0 ? 'platform' : _a, url = props.url;
    return (React.createElement("button", { onClick: handleClick(url, type) }, children));
};
export default ButtonLink;
