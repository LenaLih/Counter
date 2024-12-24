"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
var Settings_1 = require("./Settings");
var Counter_1 = require("./Counter");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "app", children: [(0, jsx_runtime_1.jsx)(Settings_1.Settings, {}), (0, jsx_runtime_1.jsx)(Counter_1.Counter, {})] }));
}
exports.default = App;
