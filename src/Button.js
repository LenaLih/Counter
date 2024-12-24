"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick, disabled = _a.disabled, className = _a.className;
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, disabled: disabled, className: className, children: title }));
};
exports.Button = Button;
