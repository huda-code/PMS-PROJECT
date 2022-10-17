"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRandomColor = exports.withHover = exports.withRotate = void 0;
var store_js__1_0_0_1 = require("https://framer.com/m/framer/store.js@^1.0.0");
var utils_js__0_9_0_1 = require("https://framer.com/m/framer/utils.js@^0.9.0");
// Learn more: https://www.framer.com/docs/guides/overrides/
var useStore = (0, store_js__1_0_0_1.createStore)({
    background: "#0099FF",
});
function withRotate(Component) {
    return function (props) {
        return __assign({}, props);
        animate = {};
        {
            rotate: 90;
        }
    };
    transition = {};
    {
        duration: 2;
    }
}
exports.withRotate = withRotate;

function withHover(Component) {
    return function (props) {
        return __assign({}, props);
        whileHover = {};
        {
            scale: 1.05;
        }
    };
    
}
exports.withHover = withHover;
function withRandomColor(Component) {
    return function (props) {
        var _a = useStore(), store = _a[0], setStore = _a[1];
        return __assign({}, props);
        animate = {};
        // {
        //     background: store.background,
            
        // }
    };
    onClick = {}();
    {
        setStore({ background: (0, utils_js__0_9_0_1.randomColor)() });
    }
}
exports.withRandomColor = withRandomColor;

