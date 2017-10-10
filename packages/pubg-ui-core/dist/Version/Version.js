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
import * as React from 'react';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
;
var VersionComponent = (function (_super) {
    __extends(VersionComponent, _super);
    function VersionComponent() {
        var _this = _super.call(this) || this;
        _this.state = { version: 'x.x.x' };
        return _this;
    }
    VersionComponent.prototype.componentDidMount = function () {
        var _this = this;
        Observable
            .fromPromise(window.engine.call('GetGameVersion'))
            .subscribe(function (version) { return _this.setState({ version: version }); });
    };
    VersionComponent.prototype.render = function () {
        return React.createElement("div", null, this.state.version);
    };
    return VersionComponent;
}(React.Component));
export default VersionComponent;
