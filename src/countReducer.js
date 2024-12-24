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
exports.resetCountAC = exports.incrementCountAC = exports.setCountAC = exports.countReducer = void 0;
var initialState = {
    count: 0,
};
var countReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_COUNT':
            return __assign(__assign({}, state), { count: action.payload });
        case 'INCREMENT':
            return __assign(__assign({}, state), { count: state.count + 1 });
        case 'RESET':
            return __assign(__assign({}, state), { count: 0 });
        default:
            return state;
    }
};
exports.countReducer = countReducer;
var setCountAC = function (value) {
    return { type: 'SET_COUNT', payload: value };
};
exports.setCountAC = setCountAC;
var incrementCountAC = function () {
    return { type: 'INCREMENT' };
};
exports.incrementCountAC = incrementCountAC;
var resetCountAC = function () {
    return { type: 'RESET' };
};
exports.resetCountAC = resetCountAC;
