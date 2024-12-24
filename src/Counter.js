"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("./Button");
var react_redux_1 = require("react-redux");
var countReducer_1 = require("./countReducer");
var settingsReducer_1 = require("./settingsReducer");
var react_1 = require("react");
var Counter = function () {
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.settings; }), maxValue = _a.maxValue, invalid = _a.invalid, isInputChanged = _a.isInputChanged;
    var count = (0, react_redux_1.useSelector)(function (state) { return state.count.count; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
    }, [count]);
    var incrementHandler = function () {
        if (count < maxValue) {
            dispatch((0, countReducer_1.setCountAC)(count + 1));
        }
    };
    var resetHandler = function () {
        dispatch((0, countReducer_1.setCountAC)(0));
        dispatch((0, settingsReducer_1.maxValueAC)(0));
        dispatch((0, settingsReducer_1.startValueAC)(0));
    };
    var displayContent = invalid ? ((0, jsx_runtime_1.jsx)("span", { className: "count__number", children: "ERROR" })) : isInputChanged ? ((0, jsx_runtime_1.jsx)("span", { children: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Set" })) : ((0, jsx_runtime_1.jsx)("span", { className: count === maxValue ? 'count__number' : '', children: count }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "counter", children: [(0, jsx_runtime_1.jsx)("div", { className: "box-number", children: displayContent }), (0, jsx_runtime_1.jsxs)("div", { className: "box__button", children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { title: 'inc', onClick: incrementHandler, disabled: count === maxValue, className: "button" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { title: 'reset', onClick: resetHandler, disabled: count === 0, className: "button" })] })] }));
};
exports.Counter = Counter;
