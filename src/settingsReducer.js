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
exports.isInputChangedAC = exports.invalidAC = exports.startValueAC = exports.maxValueAC = exports.settingsReducer = void 0;
function getInitialMaxValue() {
    var valueString = localStorage.getItem("counterMax");
    return valueString ? JSON.parse(valueString) : 0;
}
function getInitialStartValue() {
    var valueString = localStorage.getItem("counterStart");
    return valueString ? JSON.parse(valueString) : 0;
}
var initialState = {
    maxValue: getInitialMaxValue(),
    startValue: getInitialStartValue(),
    invalid: false,
    isInputChanged: false,
};
var settingsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'MAX_VALUE':
            localStorage.setItem("counterMax", JSON.stringify(action.payload));
            return __assign(__assign({}, state), { maxValue: action.payload });
        case 'START_VALUE':
            localStorage.setItem("counterStart", JSON.stringify(action.payload));
            return __assign(__assign({}, state), { startValue: action.payload });
        case 'INVALID':
            return __assign(__assign({}, state), { invalid: action.payload });
        case 'IS_INPUT_CHANGED':
            return __assign(__assign({}, state), { isInputChanged: action.payload });
        default:
            return state;
    }
};
exports.settingsReducer = settingsReducer;
var maxValueAC = function (value) {
    return { type: 'MAX_VALUE', payload: value };
};
exports.maxValueAC = maxValueAC;
var startValueAC = function (value) {
    return { type: 'START_VALUE', payload: value };
};
exports.startValueAC = startValueAC;
var invalidAC = function (value) {
    return { type: 'INVALID', payload: value };
};
exports.invalidAC = invalidAC;
var isInputChangedAC = function (value) {
    return { type: 'IS_INPUT_CHANGED', payload: value };
};
exports.isInputChangedAC = isInputChangedAC;
