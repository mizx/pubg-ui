"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
;
var Version = (function (_super) {
    __extends(Version, _super);
    function Version() {
        var _this = _super.call(this) || this;
        _this.state = { version: '' };
        return _this;
    }
    Version.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () { return _this.getVersion(); }, 32);
    };
    Version.prototype.getVersion = function () {
        var _this = this;
        Observable
            .fromPromise(window.engine.call('GetGameVersion'))
            .subscribe(function (version) { return _this.setState({ version: version }); });
    };
    Version.prototype.render = function () {
        var _a = this.props.prefix, prefix = _a === void 0 ? '' : _a;
        var version = this.state.version;
        return React.createElement("div", null,
            prefix,
            version);
    };
    return Version;
}(React.Component));
export default Version;
