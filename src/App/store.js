"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var settingsReducer_1 = require("../settingsReducer");
var countReducer_1 = require("../countReducer");
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
var rootReducer = (0, redux_1.combineReducers)({
    settings: settingsReducer_1.settingsReducer,
    count: countReducer_1.countReducer,
});
// непосредственно создаём store
exports.store = (0, redux_1.legacy_createStore)(rootReducer);
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = exports.store;
