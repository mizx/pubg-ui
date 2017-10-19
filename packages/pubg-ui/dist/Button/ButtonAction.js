"use strict";
import React from 'react';
var actionMap = {
    quit: 'Quit',
    options: 'ShowGameOption'
};
var handleClick = function (action) {
    return function (event) {
        var command = actionMap[action];
        if (command) {
            window.engine.trigger(command);
        }
    };
};
export var ButtonAction = function (props) { return (React.createElement("button", { onClick: handleClick(props.action) }, props.children)); };
export default ButtonAction;
