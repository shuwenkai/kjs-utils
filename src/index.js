"use strict";
exports.__esModule = true;
exports.truncate = exports.reverseString = exports.palindrome = exports.PubSub = exports.customNew = exports.customInstanceof = exports.deepClone4 = exports.deepClone3 = exports.deepClone2 = exports.deepClone1 = exports.debounce = exports.throttle = exports.call = exports.bind = exports.apply = exports.eventDelegation = exports.eventBus = exports.axios = exports.slice = exports.unique3 = exports.unique2 = exports.unique = exports.pullAll = exports.pull = exports.flatten2 = exports.flatten = exports.dropRight = exports.drop = exports.difference = exports.filter = exports.some = exports.every = exports.findIndex = exports.find = exports.reduce = exports.map = exports.concat = exports.chunk = void 0;
// 数组相关导出
var chunk_1 = require("./array/chunk");
exports.chunk = chunk_1.chunk;
var concat_1 = require("./array/concat");
exports.concat = concat_1.concat;
var decleares_1 = require("./array/decleares");
exports.map = decleares_1.map;
exports.reduce = decleares_1.reduce;
exports.find = decleares_1.find;
exports.findIndex = decleares_1.findIndex;
exports.every = decleares_1.every;
exports.some = decleares_1.some;
exports.filter = decleares_1.filter;
var difference_1 = require("./array/difference");
exports.difference = difference_1.difference;
var drop_1 = require("./array/drop");
exports.drop = drop_1.drop;
exports.dropRight = drop_1.dropRight;
var flatten_1 = require("./array/flatten");
exports.flatten = flatten_1.flatten;
exports.flatten2 = flatten_1.flatten2;
var pull_1 = require("./array/pull");
exports.pull = pull_1.pull;
exports.pullAll = pull_1.pullAll;
var unique_1 = require("./array/unique");
exports.unique = unique_1.unique;
exports.unique2 = unique_1.unique2;
exports.unique3 = unique_1.unique3;
var slice_1 = require("./array/slice");
exports.slice = slice_1.slice;
// axios
var index_1 = require("./axios/index");
exports.axios = index_1.axios;
// eventBus
var index_2 = require("./event-bus/index");
exports.eventBus = index_2.eventBus;
// eventDelegation, 事件委托
var index_3 = require("./event-bind/index");
exports.eventDelegation = index_3.eventDelegation;
// function相关
var apply_js_1 = require("./function/apply.js");
exports.apply = apply_js_1.apply;
var bind_1 = require("./function/bind");
exports.bind = bind_1.bind;
var call_1 = require("./function/call");
exports.call = call_1.call;
var throttle_1 = require("./function/throttle");
exports.throttle = throttle_1.throttle;
exports.debounce = throttle_1.debounce;
//object相关
var clone_1 = require("./object/clone");
exports.deepClone1 = clone_1.deepClone1;
exports.deepClone2 = clone_1.deepClone2;
exports.deepClone3 = clone_1.deepClone3;
exports.deepClone4 = clone_1.deepClone4;
var customInstanceof_1 = require("./object/customInstanceof");
exports.customInstanceof = customInstanceof_1.customInstanceof;
var customNew_1 = require("./object/customNew");
exports.customNew = customNew_1.customNew;
// 订阅发布消息相关
var index_4 = require("./pub-sub/index");
exports.PubSub = index_4.PubSub;
// 字符串相关
var index_5 = require("./string/index");
exports.palindrome = index_5.palindrome;
exports.reverseString = index_5.reverseString;
exports.truncate = index_5.truncate;
exports["default"] = {
    chunk: chunk_1.chunk,
    concat: concat_1.concat,
    map: decleares_1.map, reduce: decleares_1.reduce, find: decleares_1.find, findIndex: decleares_1.findIndex, every: decleares_1.every, some: decleares_1.some, filter: decleares_1.filter,
    difference: difference_1.difference,
    drop: drop_1.drop,
    dropRight: drop_1.dropRight,
    flatten: flatten_1.flatten,
    flatten2: flatten_1.flatten2,
    pull: pull_1.pull,
    pullAll: pull_1.pullAll,
    unique: unique_1.unique,
    unique2: unique_1.unique2,
    unique3: unique_1.unique3,
    slice: slice_1.slice,
    axios: index_1.axios,
    eventBus: index_2.eventBus,
    eventDelegation: index_3.eventDelegation,
    apply: apply_js_1.apply,
    bind: bind_1.bind,
    call: call_1.call,
    throttle: throttle_1.throttle, debounce: throttle_1.debounce,
    deepClone1: clone_1.deepClone1, deepClone2: clone_1.deepClone2, deepClone3: clone_1.deepClone3, deepClone4: clone_1.deepClone4,
    customInstanceof: customInstanceof_1.customInstanceof,
    customNew: customNew_1.customNew,
    PubSub: index_4.PubSub,
    palindrome: index_5.palindrome, reverseString: index_5.reverseString, truncate: index_5.truncate
};
