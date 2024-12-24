"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = require("./Button");
var react_redux_1 = require("react-redux");
var settingsReducer_1 = require("./settingsReducer");
var countReducer_1 = require("./countReducer");
var Settings = function () {
    var _a = (0, react_redux_1.useSelector)(function (state) { return state.settings; }), maxValue = _a.maxValue, startValue = _a.startValue, invalid = _a.invalid, isInputChanged = _a.isInputChanged;
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
    }, [startValue]);
    var onChangeMaxHandler = function (e) {
        var value = Math.max(0, +e.currentTarget.value);
        dispatch((0, settingsReducer_1.maxValueAC)(value));
        dispatch((0, settingsReducer_1.invalidAC)(value <= startValue || value <= 0));
        dispatch((0, settingsReducer_1.isInputChangedAC)(true));
    };
    var onChangeStartHandler = function (e) {
        var value = Math.max(0, +e.currentTarget.value);
        dispatch((0, settingsReducer_1.startValueAC)(value));
        dispatch((0, settingsReducer_1.invalidAC)(value >= maxValue || value < 0));
        dispatch((0, settingsReducer_1.isInputChangedAC)(true));
    };
    var getInputInvalid = function (invalid) {
        return invalid ? 'error' : '';
    };
    var onApply = function () {
        if (!invalid) {
            dispatch((0, countReducer_1.setCountAC)(startValue));
            dispatch((0, settingsReducer_1.startValueAC)(startValue));
            dispatch((0, settingsReducer_1.isInputChangedAC)(false));
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "counter", children: [(0, jsx_runtime_1.jsxs)("div", { className: "box-number", children: [(0, jsx_runtime_1.jsxs)("label", { className: "discription", children: ["max value:", (0, jsx_runtime_1.jsx)("input", { className: getInputInvalid(invalid), type: "number", value: maxValue, onChange: onChangeMaxHandler })] }), (0, jsx_runtime_1.jsxs)("label", { className: "discription", children: ["start value:", (0, jsx_runtime_1.jsx)("input", { className: getInputInvalid(invalid), type: "number", value: startValue, onChange: onChangeStartHandler })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "box__button", children: (0, jsx_runtime_1.jsx)(Button_1.Button, { title: 'set', onClick: onApply, disabled: invalid, className: "button" }) })] }));
};
exports.Settings = Settings;
