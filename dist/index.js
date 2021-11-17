/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kjsUtils"] = factory();
	else
		root["kjsUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.ts":
/*!****************************!*\
  !*** ./src/array/chunk.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.chunk = void 0;\r\n/**\r\n * @description 数组分块\r\n * @param {Array} array 原数组\r\n * @param {Number} size 分块大小\r\n * @return {Array}\r\n */\r\nfunction chunk(array, size) {\r\n    if (size === void 0) { size = 1; }\r\n    if (!Array.isArray(array)) {\r\n        throw new TypeError(\"not a array\");\r\n    }\r\n    if (array.length === 0) {\r\n        return [];\r\n    }\r\n    var result = [];\r\n    var tmp = [];\r\n    array.forEach(function (item) {\r\n        if (tmp.length === 0) {\r\n            result.push(tmp);\r\n        }\r\n        tmp.push(item);\r\n        if (tmp.length === size) {\r\n            tmp = [];\r\n        }\r\n    });\r\n    return result;\r\n}\r\nexports.chunk = chunk;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/chunk.ts?");

/***/ }),

/***/ "./src/array/concat.ts":
/*!*****************************!*\
  !*** ./src/array/concat.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nexports.__esModule = true;\r\nexports.concat = void 0;\r\n/**\r\n * @description 数组合并\r\n * @param {Array} arr1\r\n * @param {*} args\r\n */\r\nfunction concat(arr1) {\r\n    var args = [];\r\n    for (var _i = 1; _i < arguments.length; _i++) {\r\n        args[_i - 1] = arguments[_i];\r\n    }\r\n    var result = __spreadArray([], arr1, true);\r\n    args.forEach(function (item) {\r\n        if (Array.isArray(item)) {\r\n            result = __spreadArray(__spreadArray([], result, true), item, true);\r\n        }\r\n        else {\r\n            result.push(item);\r\n        }\r\n    });\r\n    return result;\r\n}\r\nexports.concat = concat;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/concat.ts?");

/***/ }),

/***/ "./src/array/decleares.ts":
/*!********************************!*\
  !*** ./src/array/decleares.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n/**\r\n * @Desc 数组相关方法\r\n * @Author wk.Shu\r\n * @Date 2021-11-11\r\n */\r\nexports.__esModule = true;\r\nexports.some = exports.every = exports.findIndex = exports.find = exports.filter = exports.reduce = exports.map = void 0;\r\n/**\r\n * @description 数组遍历\r\n * @param {Array} arr 调用数组\r\n * @param {Function} callback 回调函数\r\n * @return {Array}\r\n */\r\nfunction map(arr, callback) {\r\n    if (!Array.isArray(arr)) {\r\n        throw new TypeError(\"not a array, please in array\");\r\n    }\r\n    // 声明一个空数组\r\n    var result = [];\r\n    for (var i = 0; i < arr.length; i++) {\r\n        // 执行回掉\r\n        var element = arr[i];\r\n        result.push(callback(element, i, arr));\r\n    }\r\n    return result;\r\n}\r\nexports.map = map;\r\n/**\r\n * @description 数组reduce方法\r\n * @param {Array} arr 调用数组\r\n * @param {Function} callback 回调函数\r\n * @param {Number} initValue 初始值\r\n * @return {Number | String}\r\n */\r\nfunction reduce(arr, callback, initValue) {\r\n    if (initValue === void 0) { initValue = 0; }\r\n    var result = initValue;\r\n    for (var i = 0; i < arr.length; i++) {\r\n        var element = arr[i];\r\n        result = callback(result, element, i, arr);\r\n    }\r\n    return result;\r\n}\r\nexports.reduce = reduce;\r\n/**\r\n * @description 数组过滤\r\n * @param {Array} arr 原数组\r\n * @param {Function} callback 回调函数\r\n * @return {Array}\r\n */\r\nfunction filter(arr, callback) {\r\n    var result = [];\r\n    for (var i = 0; i < arr.length; i++) {\r\n        var element = arr[i];\r\n        // 如果结果为真，放入result数组\r\n        if (callback(element, i, arr)) {\r\n            result.push(element);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.filter = filter;\r\n/**\r\n * @description 数组查找\r\n * @param {Array} arr 原数组\r\n * @param {Function} callback 回调函数\r\n * @return {*}\r\n */\r\nfunction find(arr, callback) {\r\n    for (var i = 0; i < arr.length; i++) {\r\n        var element = arr[i];\r\n        if (callback(element, i, arr)) {\r\n            return element;\r\n        }\r\n    }\r\n}\r\nexports.find = find;\r\n/**\r\n * @description 数组查找下标\r\n * @param {Array} arr 原数组\r\n * @param {Function} callback 回调函数\r\n * @return {Number}\r\n */\r\nfunction findIndex(arr, callback) {\r\n    for (var i = 0; i < arr.length; i++) {\r\n        var element = arr[i];\r\n        if (callback(element, i, arr)) {\r\n            return i;\r\n        }\r\n    }\r\n    return -1;\r\n}\r\nexports.findIndex = findIndex;\r\n/**\r\n * @description 数组所有元素是否满足条件\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n * @return {Boolean}\r\n */\r\nfunction every(arr, callback) {\r\n    for (var i = 0; i < arr.length; i++) {\r\n        var element = arr[i];\r\n        if (!callback(element, i, arr)) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.every = every;\r\n/**\r\n * @description 数组是否有元素满足条件\r\n * @param {Array} arr\r\n * @param {function} callback\r\n * @return {Boolean}\r\n */\r\nfunction some(arr, callback) {\r\n    for (var i = 0; i < arr.length; i++) {\r\n        var element = arr[i];\r\n        if (callback(element, i, arr)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\nexports.some = some;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/decleares.ts?");

/***/ }),

/***/ "./src/array/difference.ts":
/*!*********************************!*\
  !*** ./src/array/difference.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nexports.__esModule = true;\r\nexports.difference = void 0;\r\n/**\r\n * @description 数组取差集\r\n * @param {Array} arr1 数组1\r\n * @param {Array} arr2 数组2\r\n */\r\nfunction difference(arr1, arr2) {\r\n    if (arr1.length === 0) {\r\n        return [];\r\n    }\r\n    else if (arr2.length === 0) {\r\n        return __spreadArray([], arr1, true);\r\n    }\r\n    return arr1.filter(function (item) { return !arr2.includes(item); });\r\n}\r\nexports.difference = difference;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/difference.ts?");

/***/ }),

/***/ "./src/array/drop.ts":
/*!***************************!*\
  !*** ./src/array/drop.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.dropRight = exports.drop = void 0;\r\n/**\r\n * @description 获取数组部分元素\r\n * @param {Array} array\r\n * @param {Number} size\r\n * @return {Array}\r\n */\r\nfunction drop(array, size) {\r\n    return array.filter(function (item, i) { return i >= size; });\r\n}\r\nexports.drop = drop;\r\n/**\r\n * @description 获取数组部分元素(从尾部开始)\r\n * @param {Array} array\r\n * @param {*} size\r\n * @return {Array}\r\n */\r\nfunction dropRight(array, size) {\r\n    return array.filter(function (_, i) { return i < array.length - size; });\r\n}\r\nexports.dropRight = dropRight;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/drop.ts?");

/***/ }),

/***/ "./src/array/flatten.ts":
/*!******************************!*\
  !*** ./src/array/flatten.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nexports.__esModule = true;\r\nexports.flatten2 = exports.flatten = void 0;\r\n/**\r\n * @description 数组扁平化\r\n * @param {Array} array\r\n */\r\nfunction flatten(array) {\r\n    var result = [];\r\n    array.forEach(function (item) {\r\n        if (Array.isArray(item)) {\r\n            result = __spreadArray(__spreadArray([], result, true), flatten(item), true);\r\n        }\r\n        else {\r\n            result.push(item);\r\n        }\r\n    });\r\n    return result;\r\n}\r\nexports.flatten = flatten;\r\n/**\r\n * @description 数组扁平化\r\n * @param {Array} array\r\n */\r\nfunction flatten2(array) {\r\n    var result = __spreadArray([], array, true);\r\n    while (result.some(function (item) { return Array.isArray(item); })) {\r\n        result = [].concat.apply([], result);\r\n    }\r\n    return result;\r\n}\r\nexports.flatten2 = flatten2;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/flatten.ts?");

/***/ }),

/***/ "./src/array/pull.ts":
/*!***************************!*\
  !*** ./src/array/pull.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nexports.__esModule = true;\r\nexports.pullAll = exports.pull = void 0;\r\n/**\r\n * @description 删除数组中的元素,返回删除的元素数组\r\n * @param {Array} array\r\n * @param  {...any} args\r\n * @return {Array}\r\n */\r\nfunction pull(array) {\r\n    var args = [];\r\n    for (var _i = 1; _i < arguments.length; _i++) {\r\n        args[_i - 1] = arguments[_i];\r\n    }\r\n    var result = [];\r\n    for (var i = 0; i < array.length; i++) {\r\n        var element = array[i];\r\n        if (args.includes(element)) {\r\n            result.push(element);\r\n            array.splice(i, 1);\r\n            i--;\r\n        }\r\n    }\r\n    // result = array.filter(item => args.includes(item))\r\n    // array = array.filter(item => !args.includes(item))\r\n    return result;\r\n}\r\nexports.pull = pull;\r\n/**\r\n * @description  删除数组中的元素,返回删除的元素数组\r\n * @param {Array} array\r\n * @param {Array} args\r\n */\r\nfunction pullAll(array, args) {\r\n    return pull.apply(void 0, __spreadArray([array], args, false));\r\n}\r\nexports.pullAll = pullAll;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/pull.ts?");

/***/ }),

/***/ "./src/array/slice.ts":
/*!****************************!*\
  !*** ./src/array/slice.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.slice = void 0;\r\n/**\r\n * @description 数组切片(左闭右开)\r\n * @param {Array} array\r\n * @param {Number} start\r\n * @param {Number} end\r\n */\r\nfunction slice(array, start, end) {\r\n    if (start === void 0) { start = 0; }\r\n    var result = [];\r\n    if (array.length === 0 || start >= array.length) {\r\n        return [];\r\n    }\r\n    // 如果参数为负数，则从最后开始往前取\r\n    if (start < 0 && !end) {\r\n        for (var i = array.length + start; i < array.length; i++) {\r\n            result.push(array[i]);\r\n        }\r\n        return result;\r\n    }\r\n    end = end || array.length;\r\n    if (end < start) {\r\n        end = array.length;\r\n    }\r\n    for (var i = 0; i < array.length; i++) {\r\n        var element = array[i];\r\n        if (i >= start && i < end) {\r\n            result.push(element);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.slice = slice;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/slice.ts?");

/***/ }),

/***/ "./src/array/unique.ts":
/*!*****************************!*\
  !*** ./src/array/unique.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.unique3 = exports.unique2 = exports.unique = void 0;\r\n/**\r\n * @description 数组去重(借用includes或者indexof方法，实际两层循环)\r\n * @param {Array} array 原数组\r\n * @return {Array}\r\n */\r\nfunction unique(array) {\r\n    var result = [];\r\n    for (var i = 0; i < array.length; i++) {\r\n        var element = array[i];\r\n        if (!result.includes(element)) {\r\n            result.push(element);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.unique = unique;\r\n/**\r\n * @description 数组去重2(借用对象)，一层循环完成\r\n * @param {Array} array 原数组\r\n * @return {Array}\r\n */\r\nfunction unique2(array) {\r\n    var result = [];\r\n    var tmp = {};\r\n    for (var i = 0; i < array.length; i++) {\r\n        var item = array[i];\r\n        if (!tmp[item]) {\r\n            tmp[item] = true;\r\n            result.push(item);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.unique2 = unique2;\r\n/**\r\n * @description 数组去重3(借用ES6集合Set, 代码简洁)\r\n * @param {Array} array 原数组\r\n * @return {Array}\r\n */\r\nfunction unique3(array) {\r\n    return Array.from(new Set(array));\r\n}\r\nexports.unique3 = unique3;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/unique.ts?");

/***/ }),

/***/ "./src/axios/index.ts":
/*!****************************!*\
  !*** ./src/axios/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.axios = void 0;\r\n/**\r\n *\r\n * @param {Object} param0\r\n * @return {Promise}\r\n */\r\nfunction axios(_a) {\r\n    var method = _a.method, url = _a.url, params = _a.params, data = _a.data;\r\n    return new Promise(function (resolve, reject) {\r\n        // 1. 创建http对象\r\n        var xhr = new XMLHttpRequest();\r\n        // 2. 初始化\r\n        //    --处理params参数成 a=100&b=200形式\r\n        var str = '';\r\n        for (var key in params) {\r\n            if (Object.hasOwnProperty.call(params, key)) {\r\n                var element = params[key];\r\n                str += key + \"=\" + element + \"&\";\r\n            }\r\n        }\r\n        str = str.slice(0, -1);\r\n        // 3. 发起请求\r\n        xhr.open(method, url + '?' + str);\r\n        if (['POST', 'PUT', 'DELETE'].includes(method.toUpperCase())) {\r\n            // 设置content-type mime类型\r\n            xhr.setRequestHeader(\"Content-Type\", \"application/json\");\r\n            xhr.send(JSON.stringify(data));\r\n        }\r\n        else {\r\n            xhr.send();\r\n        }\r\n        // 设置相应类型为json\r\n        xhr.responseType = 'json';\r\n        // 4. 处理结果\r\n        xhr.onreadystatechange = function () {\r\n            if (xhr.readyState === 4) {\r\n                // 判断响应码\r\n                if (xhr.status >= 200 && xhr.status < 300) {\r\n                    resolve({\r\n                        status: xhr.status,\r\n                        message: xhr.statusText,\r\n                        data: xhr.response\r\n                    });\r\n                }\r\n                else {\r\n                    reject(new Error(\"请求失败,状态码为\" + xhr.status));\r\n                }\r\n            }\r\n        };\r\n    });\r\n}\r\nexports.axios = axios;\r\n/**\r\n * @description get请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\naxios.get = function (url, options) {\r\n    return axios(Object.assign(options, { method: 'get', url: url }));\r\n};\r\n/**\r\n * @description post请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\naxios.post = function (url, options) {\r\n    return axios(Object.assign(options, { method: 'post', url: url }));\r\n};\r\n/**\r\n * @description post请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\naxios.put = function (url, options) {\r\n    return axios(Object.assign(options, { method: 'put', url: url }));\r\n};\r\n/**\r\n * @description post请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\naxios[\"delete\"] = function (url, options) {\r\n    return axios(Object.assign(options, { method: 'delete', url: url }));\r\n};\r\n/**\r\n * @description 获取地址栏参数\r\n * @param url 需要获取地址的参数\r\n */\r\naxios.getQuery = function (url) {\r\n    var search = url.split('?')[1];\r\n    if (!search) {\r\n        return {};\r\n    }\r\n    return JSON.parse('{\"' +\r\n        decodeURIComponent(search)\r\n            .replace(/\"/g, '\\\\\"')\r\n            .replace(/&/g, '\",\"')\r\n            .replace(/=/g, '\":\"')\r\n            .replace(/\\+/g, ' ') +\r\n        '\"}');\r\n};\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/axios/index.ts?");

/***/ }),

/***/ "./src/date/index.ts":
/*!***************************!*\
  !*** ./src/date/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.dateFormat = void 0;\r\n/**\r\n * @description 格式化日期时间\r\n * @param date 格式化的时间戳或者时间对象\r\n * @param format 格式(yyyy-mm-dd)\r\n */\r\nfunction dateFormat(date, fmt) {\r\n    var ret;\r\n    if (!(date instanceof Date)) {\r\n        // 判断是否时间对象类型, \r\n        date = new Date(date);\r\n    }\r\n    var opt = {\r\n        'Y+': date.getFullYear().toString(),\r\n        'y+': date.getFullYear().toString(),\r\n        'm+': (date.getMonth() + 1).toString(),\r\n        'd+': date.getDate().toString(),\r\n        'H+': date.getHours().toString(),\r\n        'h+': date.getHours().toString(),\r\n        'M+': date.getMinutes().toString(),\r\n        'S+': date.getSeconds().toString() // 秒\r\n        // 有其他格式化字符需求可以继续添加，必须转化成字符串\r\n    };\r\n    for (var k in opt) {\r\n        var reg = new RegExp('(' + k + ')');\r\n        ret = reg.exec(fmt);\r\n        if (ret) {\r\n            // 判断长度，如果长度不够，就在字符串前面补充0至相应位数，主要小于十月，小于十号之类的情况\r\n            var strReplace = (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0'));\r\n            // 替换字符串\r\n            fmt = fmt.replace(ret[1], strReplace);\r\n        }\r\n    }\r\n    return fmt;\r\n}\r\nexports.dateFormat = dateFormat;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/date/index.ts?");

/***/ }),

/***/ "./src/event-bind/index.ts":
/*!*********************************!*\
  !*** ./src/event-bind/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n/**\r\n * 事件委托、冒泡\r\n */\r\nexports.__esModule = true;\r\nexports.eventDelegation = void 0;\r\n/**\r\n * @description 事件委托\r\n * @param {String|HTMLElement} el 元素\r\n * @param {String} eventType 事件类型\r\n * @param {Function} fn 事件回调\r\n * @param {String} selector 子元素选择器\r\n */\r\nfunction eventDelegation(el, eventType, fn, selector) {\r\n    if (typeof el === 'string') {\r\n        el = document.querySelector(el);\r\n    }\r\n    // 事件绑定\r\n    if (!selector) {\r\n        // 没有传递子元素选择器，给el绑定事件\r\n        el.addEventListener(eventType, fn);\r\n    }\r\n    else {\r\n        el.addEventListener(eventType, function (e) {\r\n            // 获取点击的事件源\r\n            var target = e.target;\r\n            //判断选择器与元素是否相符\r\n            if (target.matches(selector)) {\r\n                fn.call(target);\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.eventDelegation = eventDelegation;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/event-bind/index.ts?");

/***/ }),

/***/ "./src/event-bus/index.ts":
/*!********************************!*\
  !*** ./src/event-bus/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.eventBus = exports.EventBus = void 0;\r\nvar EventBus = /** @class */ (function () {\r\n    function EventBus() {\r\n        this.callbacks = {};\r\n    }\r\n    /**\r\n     * @description 触发事件\r\n     * @param {String} type 事件名\r\n     * @param {Function} callback 回调函数\r\n     */\r\n    EventBus.prototype.on = function (type, callback) {\r\n        if (this.callbacks[type]) {\r\n            this.callbacks[type].push(callback);\r\n        }\r\n        else {\r\n            // callbacks中没有该事件\r\n            this.callbacks[type] = [callback];\r\n        }\r\n    };\r\n    /**\r\n     * @description 触发事件\r\n     * @param {String} type 事件名\r\n     * @param {any} data 事件参数\r\n     */\r\n    EventBus.prototype.emit = function (type, data) {\r\n        if (this.callbacks[type] && this.callbacks[type].length > 0) {\r\n            this.callbacks[type].forEach(function (callback) {\r\n                callback(data);\r\n            });\r\n        }\r\n        else {\r\n            throw new TypeError(\"没有该事件或该事件已被删除。。。\");\r\n        }\r\n    };\r\n    /**\r\n     * @description 解绑事件(不传入则全部清除)\r\n     * @param {String} eventName 事件名称\r\n     */\r\n    EventBus.prototype.off = function (eventName) {\r\n        if (eventName) {\r\n            delete this.callbacks[eventName];\r\n        }\r\n        else {\r\n            this.callbacks = {};\r\n        }\r\n    };\r\n    return EventBus;\r\n}());\r\nexports.EventBus = EventBus;\r\nexports.eventBus = new EventBus();\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/event-bus/index.ts?");

/***/ }),

/***/ "./src/function/apply.ts":
/*!*******************************!*\
  !*** ./src/function/apply.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.apply = void 0;\r\n// apply作用跟call类似，但是函数参数是以数组形式传入，call是以单个参数传入\r\nfunction apply(Fn, obj, args) {\r\n    if (typeof Fn !== 'function') {\r\n        throw new TypeError(\"not a function\");\r\n    }\r\n    obj = obj || globalThis;\r\n    obj.temp = Fn;\r\n    var result = obj.temp.apply(obj, args);\r\n    delete obj.temp;\r\n    return result;\r\n}\r\nexports.apply = apply;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/apply.ts?");

/***/ }),

/***/ "./src/function/bind.ts":
/*!******************************!*\
  !*** ./src/function/bind.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nexports.__esModule = true;\r\nexports.bind = void 0;\r\n// bind类似于call，但是call会执行函数，bind会返回一个新的函数\r\nfunction bind(Fn, obj) {\r\n    var args = [];\r\n    for (var _i = 2; _i < arguments.length; _i++) {\r\n        args[_i - 2] = arguments[_i];\r\n    }\r\n    if (typeof Fn !== 'function') {\r\n        throw new TypeError(\"not a function\");\r\n    }\r\n    return function () {\r\n        var args2 = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args2[_i] = arguments[_i];\r\n        }\r\n        // 执行call\r\n        return Fn.call.apply(Fn, __spreadArray(__spreadArray([obj], args, false), args2, false));\r\n    };\r\n}\r\nexports.bind = bind;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/bind.ts?");

/***/ }),

/***/ "./src/function/call.ts":
/*!******************************!*\
  !*** ./src/function/call.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.call = void 0;\r\nfunction call(Fn, obj) {\r\n    var args = [];\r\n    for (var _i = 2; _i < arguments.length; _i++) {\r\n        args[_i - 2] = arguments[_i];\r\n    }\r\n    if (typeof Fn !== 'function') {\r\n        throw new TypeError(\"不是函数调用\");\r\n    }\r\n    obj = obj || globalThis;\r\n    // 为obj 添加临时方法\r\n    obj.temp = Fn;\r\n    var result = obj.temp.apply(obj, args);\r\n    delete obj.temp;\r\n    return result;\r\n}\r\nexports.call = call;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/call.ts?");

/***/ }),

/***/ "./src/function/throttle.ts":
/*!**********************************!*\
  !*** ./src/function/throttle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.debounce = exports.throttle = void 0;\r\n/**\r\n * @description 函数防抖(等待时间内只执行一次)\r\n * @param {Function} callback 需要防抖的函数\r\n * @param {Number} wait 等待时间(毫秒)\r\n * @return {Function}\r\n */\r\nfunction throttle(callback, wait) {\r\n    var start = 0;\r\n    return function (event) {\r\n        var now = Date.now();\r\n        if (now - start >= wait) {\r\n            // 间隔大于设定时间,满足执行回调函数\r\n            callback.call(this, event);\r\n            // 修改开始时间\r\n            start = now;\r\n        }\r\n    };\r\n}\r\nexports.throttle = throttle;\r\n/**\r\n * @description 节流(在上一次调用后，等待时间结束后执行一次)\r\n * @param {Function} callback 需要节流的函数\r\n * @param {Number} time 等待时间(毫秒)\r\n * @return {Function}\r\n */\r\nfunction debounce(callback, time) {\r\n    var timeId = null; //定时器\r\n    return function (event) {\r\n        var _this = this;\r\n        if (timeId != null) {\r\n            clearTimeout(timeId);\r\n        }\r\n        timeId = setTimeout(function () {\r\n            // 因为箭头函数this指向上层this，所以这里写this效果相同\r\n            callback.call(_this, event);\r\n            timeId = null;\r\n        }, time);\r\n    };\r\n}\r\nexports.debounce = debounce;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/function/throttle.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.dateFormat = exports.truncate = exports.reverseString = exports.palindrome = exports.PubSub = exports.customNew = exports.customInstanceof = exports.deepClone4 = exports.deepClone3 = exports.deepClone2 = exports.deepClone1 = exports.debounce = exports.throttle = exports.call = exports.bind = exports.apply = exports.eventDelegation = exports.eventBus = exports.axios = exports.slice = exports.unique3 = exports.unique2 = exports.unique = exports.pullAll = exports.pull = exports.flatten2 = exports.flatten = exports.dropRight = exports.drop = exports.difference = exports.filter = exports.some = exports.every = exports.findIndex = exports.find = exports.reduce = exports.map = exports.concat = exports.chunk = void 0;\r\n// 数组相关导出\r\nvar chunk_1 = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.ts\");\r\nexports.chunk = chunk_1.chunk;\r\nvar concat_1 = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.ts\");\r\nexports.concat = concat_1.concat;\r\nvar decleares_1 = __webpack_require__(/*! ./array/decleares */ \"./src/array/decleares.ts\");\r\nexports.map = decleares_1.map;\r\nexports.reduce = decleares_1.reduce;\r\nexports.find = decleares_1.find;\r\nexports.findIndex = decleares_1.findIndex;\r\nexports.every = decleares_1.every;\r\nexports.some = decleares_1.some;\r\nexports.filter = decleares_1.filter;\r\nvar difference_1 = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.ts\");\r\nexports.difference = difference_1.difference;\r\nvar drop_1 = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.ts\");\r\nexports.drop = drop_1.drop;\r\nexports.dropRight = drop_1.dropRight;\r\nvar flatten_1 = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.ts\");\r\nexports.flatten = flatten_1.flatten;\r\nexports.flatten2 = flatten_1.flatten2;\r\nvar pull_1 = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.ts\");\r\nexports.pull = pull_1.pull;\r\nexports.pullAll = pull_1.pullAll;\r\nvar unique_1 = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.ts\");\r\nexports.unique = unique_1.unique;\r\nexports.unique2 = unique_1.unique2;\r\nexports.unique3 = unique_1.unique3;\r\nvar slice_1 = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.ts\");\r\nexports.slice = slice_1.slice;\r\n// axios\r\nvar index_1 = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.ts\");\r\nexports.axios = index_1.axios;\r\n// eventBus\r\nvar index_2 = __webpack_require__(/*! ./event-bus/index */ \"./src/event-bus/index.ts\");\r\nexports.eventBus = index_2.eventBus;\r\n// eventDelegation, 事件委托\r\nvar index_3 = __webpack_require__(/*! ./event-bind/index */ \"./src/event-bind/index.ts\");\r\nexports.eventDelegation = index_3.eventDelegation;\r\n// function相关\r\nvar apply_1 = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.ts\");\r\nexports.apply = apply_1.apply;\r\nvar bind_1 = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.ts\");\r\nexports.bind = bind_1.bind;\r\nvar call_1 = __webpack_require__(/*! ./function/call */ \"./src/function/call.ts\");\r\nexports.call = call_1.call;\r\nvar throttle_1 = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.ts\");\r\nexports.throttle = throttle_1.throttle;\r\nexports.debounce = throttle_1.debounce;\r\n//object相关\r\nvar clone_1 = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.ts\");\r\nexports.deepClone1 = clone_1.deepClone1;\r\nexports.deepClone2 = clone_1.deepClone2;\r\nexports.deepClone3 = clone_1.deepClone3;\r\nexports.deepClone4 = clone_1.deepClone4;\r\nvar customInstanceof_1 = __webpack_require__(/*! ./object/customInstanceof */ \"./src/object/customInstanceof.ts\");\r\nexports.customInstanceof = customInstanceof_1.customInstanceof;\r\nvar customNew_1 = __webpack_require__(/*! ./object/customNew */ \"./src/object/customNew.ts\");\r\nexports.customNew = customNew_1.customNew;\r\n// 订阅发布消息相关\r\nvar index_4 = __webpack_require__(/*! ./pub-sub/index */ \"./src/pub-sub/index.ts\");\r\nexports.PubSub = index_4.PubSub;\r\n// 字符串相关\r\nvar index_5 = __webpack_require__(/*! ./string/index */ \"./src/string/index.ts\");\r\nexports.palindrome = index_5.palindrome;\r\nexports.reverseString = index_5.reverseString;\r\nexports.truncate = index_5.truncate;\r\nvar index_6 = __webpack_require__(/*! ./date/index */ \"./src/date/index.ts\");\r\nexports.dateFormat = index_6.dateFormat;\r\nexports[\"default\"] = {\r\n    chunk: chunk_1.chunk,\r\n    concat: concat_1.concat,\r\n    map: decleares_1.map,\r\n    reduce: decleares_1.reduce,\r\n    find: decleares_1.find,\r\n    findIndex: decleares_1.findIndex,\r\n    every: decleares_1.every,\r\n    some: decleares_1.some,\r\n    filter: decleares_1.filter,\r\n    difference: difference_1.difference,\r\n    drop: drop_1.drop,\r\n    dropRight: drop_1.dropRight,\r\n    flatten: flatten_1.flatten,\r\n    flatten2: flatten_1.flatten2,\r\n    pull: pull_1.pull,\r\n    pullAll: pull_1.pullAll,\r\n    unique: unique_1.unique,\r\n    unique2: unique_1.unique2,\r\n    unique3: unique_1.unique3,\r\n    slice: slice_1.slice,\r\n    axios: index_1.axios,\r\n    eventDelegation: index_3.eventDelegation,\r\n    apply: apply_1.apply,\r\n    bind: bind_1.bind,\r\n    call: call_1.call,\r\n    throttle: throttle_1.throttle,\r\n    debounce: throttle_1.debounce,\r\n    deepClone1: clone_1.deepClone1,\r\n    deepClone2: clone_1.deepClone2,\r\n    deepClone3: clone_1.deepClone3,\r\n    deepClone4: clone_1.deepClone4,\r\n    customInstanceof: customInstanceof_1.customInstanceof,\r\n    customNew: customNew_1.customNew,\r\n    PubSub: index_4.PubSub,\r\n    eventBus: index_2.eventBus,\r\n    palindrome: index_5.palindrome,\r\n    reverseString: index_5.reverseString,\r\n    truncate: index_5.truncate,\r\n    dateFormat: index_6.dateFormat\r\n};\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/index.ts?");

/***/ }),

/***/ "./src/object/clone.ts":
/*!*****************************!*\
  !*** ./src/object/clone.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.deepClone4 = exports.deepClone3 = exports.deepClone2 = exports.deepClone1 = void 0;\r\n/**\r\n * @description 深拷贝1，常见拷贝方式(不能克隆方法，不能解决循环引用)\r\n * @param {Object} target\r\n * @return {Object}\r\n */\r\nfunction deepClone1(target) {\r\n    return JSON.parse(JSON.stringify(target));\r\n}\r\nexports.deepClone1 = deepClone1;\r\n/**\r\n * @description 深拷贝2，递归拷贝方式(克隆方法，不能解决循环引用)\r\n * @param {Object} target\r\n * @return {Object}\r\n */\r\nfunction deepClone2(target) {\r\n    if (typeof target === 'object' && target !== null) {\r\n        var result = Array.isArray(target) ? [] : {};\r\n        for (var key in target) {\r\n            if (Object.hasOwnProperty.call(target, key)) {\r\n                result[key] = deepClone2(target[key]);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    else {\r\n        return target;\r\n    }\r\n}\r\nexports.deepClone2 = deepClone2;\r\n/**\r\n * @description 深拷贝3，递归拷贝方式(利用map,解决循环引用)\r\n * @param {Object} target\r\n * @param {Map} hash\r\n * @return {Object}\r\n */\r\nfunction deepClone3(target, hash) {\r\n    if (hash === void 0) { hash = new Map(); }\r\n    if (typeof target === 'object' && target !== null) {\r\n        // 判断是否克隆过\r\n        if (hash.get(target)) {\r\n            return hash.get(target);\r\n        }\r\n        var result = Array.isArray(target) ? [] : {};\r\n        hash.set(target, result);\r\n        for (var key in target) {\r\n            if (Object.hasOwnProperty.call(target, key)) {\r\n                result[key] = deepClone3(target[key], hash);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    else {\r\n        return target;\r\n    }\r\n}\r\nexports.deepClone3 = deepClone3;\r\n/**\r\n * @description 深拷贝4，递归拷贝方式(利用map,解决循环引用, 区分数组对象分别循环处理性能优化)\r\n * @param {Object} target\r\n * @param {Map} hash\r\n * @return {Object}\r\n */\r\nfunction deepClone4(target, hash) {\r\n    if (hash === void 0) { hash = new Map(); }\r\n    if (typeof target === 'object' && target !== null) {\r\n        // 判断是否克隆过\r\n        if (hash.get(target)) {\r\n            return hash.get(target);\r\n        }\r\n        var isArr = Array.isArray(target);\r\n        var result_1 = isArr ? [] : {};\r\n        hash.set(target, result_1);\r\n        if (isArr) {\r\n            // 数组的情况下\r\n            target.forEach(function (item, index) {\r\n                result_1[index] = deepClone4(item, hash);\r\n            });\r\n        }\r\n        else {\r\n            // 对象的情况\r\n            Object.keys(target).forEach(function (key) {\r\n                result_1[key] = deepClone4(target[key], hash);\r\n            });\r\n        }\r\n        return result_1;\r\n    }\r\n    else {\r\n        return target;\r\n    }\r\n}\r\nexports.deepClone4 = deepClone4;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/object/clone.ts?");

/***/ }),

/***/ "./src/object/customInstanceof.ts":
/*!****************************************!*\
  !*** ./src/object/customInstanceof.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.customInstanceof = void 0;\r\n/**\r\n * @description 判断L是否在R原型上\r\n * @param {Object} L\r\n * @param {*} R\r\n * @return {Boolean}\r\n */\r\nfunction customInstanceof(L, R) {\r\n    var LP = L.__proto__;\r\n    while (LP) {\r\n        if (LP === R.prototype) {\r\n            return true;\r\n        }\r\n        LP = LP.__proto__;\r\n    }\r\n    return false;\r\n}\r\nexports.customInstanceof = customInstanceof;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/object/customInstanceof.ts?");

/***/ }),

/***/ "./src/object/customNew.ts":
/*!*********************************!*\
  !*** ./src/object/customNew.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nexports.__esModule = true;\r\nexports.customNew = void 0;\r\n/**\r\n * @description\r\n * @param {Function} fn\r\n * @param  {...any} args\r\n */\r\nfunction customNew(fn) {\r\n    var args = [];\r\n    for (var _i = 1; _i < arguments.length; _i++) {\r\n        args[_i - 1] = arguments[_i];\r\n    }\r\n    // 1. 创建一个新对象\r\n    var obj = {};\r\n    // 2. 修改内部this，指向新对象\r\n    var result = fn.call.apply(fn, __spreadArray([obj], args, false));\r\n    // 3. 修改新对象的原型\r\n    obj.__proto__ = fn.prototype;\r\n    // 4. 返回新对象\r\n    // --4.1 如果构造函数有返回值且为对象，返回该对象\r\n    // --4.2 没有返回值或返回值不是对象，返回新对象\r\n    return result instanceof Object ? result : obj;\r\n}\r\nexports.customNew = customNew;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/object/customNew.ts?");

/***/ }),

/***/ "./src/pub-sub/index.ts":
/*!******************************!*\
  !*** ./src/pub-sub/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.PubSub = exports.PubSubClass = void 0;\r\nvar PubSubClass = /** @class */ (function () {\r\n    function PubSubClass() {\r\n        this.callbacks = {};\r\n        this.id = 1;\r\n        this.callbacks = {};\r\n    }\r\n    /**\r\n     * @description 订阅\r\n     * @param {String} channel\r\n     * @param {Function} callback\r\n     */\r\n    PubSubClass.prototype.subscribe = function (channel, callback) {\r\n        var token = \"token_\" + this.id++;\r\n        this.callbacks[channel] = this.callbacks[channel] || {};\r\n        this.callbacks[channel][token] = callback;\r\n        // 返回唯一id\r\n        return token;\r\n    };\r\n    /**\r\n     * @description 发布\r\n     * @param {String} channel\r\n     * @param {any} data\r\n     */\r\n    PubSubClass.prototype.publish = function (channel, data) {\r\n        if (this.callbacks[channel]) {\r\n            Object.values(this.callbacks[channel]).forEach(function (fn) {\r\n                fn(data);\r\n            });\r\n        }\r\n    };\r\n    /**\r\n     * @description 取消订阅\r\n     * @param {Number} type 退订类型(1退订单个订阅,2清空订阅频道,3全部清空)\r\n     * @param {String} flag 取消订阅的频道或者唯一id\r\n     */\r\n    PubSubClass.prototype.unSubscribe = function (type, flag) {\r\n        switch (type) {\r\n            case 1:\r\n                this.unSubOfKey(flag);\r\n                break;\r\n            case 2:\r\n                this.unSubOfChannel(flag);\r\n                break;\r\n            case 3:\r\n                this.unSubOfAll();\r\n                break;\r\n            default: throw new TypeError(\"type类型错误\");\r\n        }\r\n    };\r\n    /**\r\n     * @description 清空所有订阅\r\n     */\r\n    PubSubClass.prototype.unSubOfAll = function () {\r\n        this.callbacks = {};\r\n    };\r\n    /**\r\n     * @description 清空单个订阅\r\n     * @param {String} key 订阅ID\r\n     */\r\n    PubSubClass.prototype.unSubOfKey = function (key) {\r\n        var callbackObj = Object.values(this.callbacks).find(function (item) { return item.hasOwnProperty(key); });\r\n        if (callbackObj) {\r\n            delete callbackObj[key];\r\n        }\r\n    };\r\n    /**\r\n     * @description 清空频道所有订阅\r\n     * @param {String} channel 频道名\r\n     */\r\n    PubSubClass.prototype.unSubOfChannel = function (channel) {\r\n        delete this.callbacks[channel];\r\n    };\r\n    return PubSubClass;\r\n}());\r\nexports.PubSubClass = PubSubClass;\r\nexports.PubSub = new PubSubClass();\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/pub-sub/index.ts?");

/***/ }),

/***/ "./src/string/index.ts":
/*!*****************************!*\
  !*** ./src/string/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.truncate = exports.palindrome = exports.reverseString = void 0;\r\n/**\r\n * @description 反转字符串\r\n * @param {String} str\r\n * @return {String}\r\n */\r\nfunction reverseString(str) {\r\n    // return [...str].reverse().join()\r\n    return str.split('').reverse().join('');\r\n}\r\nexports.reverseString = reverseString;\r\n/**\r\n * @description 是否回文字符串\r\n * @param {String} str\r\n * @return {Boolean}\r\n */\r\nfunction palindrome(str) {\r\n    return reverseString(str) === str;\r\n}\r\nexports.palindrome = palindrome;\r\n/**\r\n * @description 字符串截断\r\n * @param {String} str\r\n * @param {Number} size\r\n */\r\nfunction truncate(str, size) {\r\n    return str.slice(0, size) + '...';\r\n}\r\nexports.truncate = truncate;\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/string/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});