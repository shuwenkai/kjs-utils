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

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n\r\n/**\r\n * @description 数组分块\r\n * @param {Array} array 原数组\r\n * @param {Number} size 分块大小\r\n * @return {Array}\r\n */\r\nfunction chunk(array, size = 1) {\r\n    if(!Array.isArray(array)) {\r\n        throw new TypeError(\"not a array\")\r\n    }\r\n    if(array.length === 0){\r\n        return []\r\n    }\r\n\r\n    let result = []\r\n    let tmp = []\r\n\r\n    array.forEach(item => {\r\n        if(tmp.length === 0) {\r\n            result.push(tmp)\r\n        }\r\n\r\n        tmp.push(item)\r\n\r\n        if(tmp.length === size) {\r\n            tmp = []\r\n        }\r\n    })\r\n\r\n    return result\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n\r\n/**\r\n * @description 数组合并\r\n * @param {Array} arr1 \r\n * @param {*} args \r\n */\r\nfunction concat(arr1, ...args) {\r\n    let result = [...arr1]\r\n    args.forEach(item => {\r\n        if(Array.isArray(item)) {\r\n            result = [...result, ...item]\r\n        } else {\r\n            result.push(item)\r\n        }\r\n    });\r\n    return result\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/decleares.js":
/*!********************************!*\
  !*** ./src/array/decleares.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n/**\r\n * @Desc 数组相关方法\r\n * @Author wk.Shu\r\n * @Date 2021-11-11\r\n */\r\n\r\n\r\n/**\r\n * @description 数组遍历\r\n * @param {Array} arr 调用数组\r\n * @param {Function} callback 回调函数\r\n * @return {Array}\r\n */\r\nfunction map(arr, callback) {\r\n    if(!Array.isArray(arr)) {\r\n        throw new TypeError(\"not a array, please in array\")\r\n    }\r\n    // 声明一个空数组\r\n    let result = [];\r\n    for (let i = 0; i < arr.length; i++) {\r\n        // 执行回掉\r\n        const element = arr[i];\r\n        result.push(callback(element, i, arr))\r\n    }\r\n    return result;\r\n}\r\n\r\n/**\r\n * @description 数组reduce方法\r\n * @param {Array} arr 调用数组\r\n * @param {Function} callback 回调函数\r\n * @param {Number} initValue 初始值\r\n * @return {Array}\r\n */\r\nfunction reduce(arr, callback, initValue = 0) {\r\n    let result = initValue;\r\n    for (let i = 0; i < arr.length; i++) {\r\n        const element = arr[i];\r\n        result = callback(result, element, i, arr)\r\n    }\r\n    return result;\r\n}\r\n\r\n/**\r\n * @description 数组过滤\r\n * @param {Array} arr 原数组\r\n * @param {Function} callback 回调函数\r\n * @return {Array}\r\n */\r\nfunction filter(arr, callback) {\r\n    let result = []\r\n    for (let i = 0; i < arr.length; i++) {\r\n        const element = arr[i];\r\n        // 如果结果为真，放入result数组\r\n        if(callback(element, i, arr)) {\r\n            result.push(element)\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n/**\r\n * @description 数组查找\r\n * @param {Array} arr 原数组\r\n * @param {Function} callback 回调函数\r\n * @return {*}\r\n */\r\nfunction find(arr, callback) {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        const element = arr[i];\r\n        if(callback(element, i, arr)) {\r\n            return element\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * @description 数组查找下标\r\n * @param {Array} arr 原数组\r\n * @param {Function} callback 回调函数\r\n * @return {Number}\r\n */\r\nfunction findIndex(arr, callback) {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        const element = arr[i];\r\n        if(callback(element, i, arr)) {\r\n            return i\r\n        }\r\n    }\r\n    return -1\r\n}\r\n\r\n/**\r\n * @description 数组所有元素是否满足条件\r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @return {Boolean}\r\n */\r\nfunction every(arr, callback) {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        const element = arr[i];\r\n        if(!callback(element, i, arr)) {\r\n            return false\r\n        }\r\n    }\r\n    return true\r\n}\r\n\r\n/**\r\n * @description 数组是否有元素满足条件\r\n * @param {Array} arr \r\n * @param {function} callback \r\n * @return {Boolean}\r\n */\r\nfunction some(arr, callback) {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        const element = arr[i];\r\n        if(callback(element, i, arr)) {\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/decleares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n\r\n/**\r\n * @description 数组取差集\r\n * @param {Array} arr1 数组1\r\n * @param {Array} arr2 数组2\r\n */\r\nfunction difference(arr1, arr2){\r\n    if(arr1.length === 0) {\r\n        return []\r\n    }else if(arr2.length === 0) {\r\n        return [...arr1]\r\n    }\r\n    return arr1.filter(item => !arr2.includes(item));\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n\r\n/**\r\n * @description 获取数组部分元素\r\n * @param {Array} array \r\n * @param {Number} size \r\n * @return {Array}\r\n */\r\nfunction drop(array, size) {\r\n    return array.filter((item,i) => i >= size)\r\n}\r\n\r\n/**\r\n * @description 获取数组部分元素(从尾部开始)\r\n * @param {Array} array \r\n * @param {*} size \r\n * @return {Array} \r\n */\r\nfunction dropRight(array, size) {\r\n    return array.filter((item,i) => i < array.length - size)\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten\": () => (/* binding */ flatten),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2)\n/* harmony export */ });\n\r\n/**\r\n * @description 数组扁平化\r\n * @param {Array} array \r\n */\r\nfunction flatten(array) {\r\n    let result = []\r\n    array.forEach(item => {\r\n        if(Array.isArray(item)) {\r\n            result = [...result, ...flatten(item)]\r\n        } else {\r\n            result.push(item)\r\n        }\r\n    })\r\n    return result\r\n}\r\n\r\n/**\r\n * @description 数组扁平化\r\n * @param {Array} array \r\n */\r\nfunction flatten2(array) {\r\n    let result = [...array]\r\n    \r\n    while(result.some(item => Array.isArray(item))) {\r\n        result = [].concat(...result)\r\n    }\r\n    \r\n    return result\r\n}\r\n\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n\r\n/**\r\n * @description 删除数组中的元素,返回删除的元素数组\r\n * @param {Array} array \r\n * @param  {...any} args \r\n * @return {Array}\r\n */\r\nfunction pull(array, ...args) {\r\n    let result = []\r\n    for (let i = 0; i < array.length; i++) {\r\n        const element = array[i];\r\n        if(args.includes(element)){\r\n            result.push(element)\r\n            array.splice(i, 1)\r\n            i--\r\n        }\r\n    }\r\n    // result = array.filter(item => args.includes(item))\r\n    // array = array.filter(item => !args.includes(item))\r\n    return result\r\n}\r\n\r\n/**\r\n * @description  删除数组中的元素,返回删除的元素数组\r\n * @param {Array} array \r\n * @param {Array} args \r\n */\r\nfunction pullAll(array, args) {\r\n    return pull(array, ...args)\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n\r\n/**\r\n * @description 数组切片(左闭右开)\r\n * @param {Array} array \r\n * @param {Number} start \r\n * @param {Number} end \r\n */\r\nfunction slice(array, start = 0, end){\r\n    let result = []\r\n    if(array.length === 0 || start >= array.length) {\r\n        return []\r\n    }\r\n\r\n    // 如果参数为负数，则从最后开始往前取\r\n    if(start < 0 && !end) {\r\n        for (let i = array.length + start; i < array.length; i++) {\r\n            result.push(array[i])\r\n        }\r\n        return result\r\n    }\r\n\r\n    end = end || array.length\r\n    if(end < start) {\r\n        end = array.length\r\n    }\r\n    \r\n    for (let i = 0; i < array.length; i++) {\r\n        const element = array[i];\r\n        if(i >= start && i < end) {\r\n            result.push(element)\r\n        }\r\n    }\r\n    return result\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\n\r\n/**\r\n * @description 数组去重(借用includes或者indexof方法，实际两层循环)\r\n * @param {Array} array 原数组\r\n * @return {Array}\r\n */\r\nfunction unique(array) {\r\n    const result = []\r\n    for (let i = 0; i < array.length; i++) {\r\n        const element = array[i];\r\n        if(!result.includes(element)){\r\n            result.push(element)\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n/**\r\n * @description 数组去重2(借用对象)，一层循环完成\r\n * @param {Array} array 原数组\r\n * @return {Array}\r\n */\r\nfunction unique2(array) {\r\n    let result = []\r\n    let tmp = {}\r\n    for (let i = 0; i < array.length; i++) {\r\n        const item = array[i];\r\n        if(!tmp[item]){\r\n            tmp[item] = true\r\n            result.push(item)\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n/**\r\n * @description 数组去重3(借用ES6集合Set, 代码简洁)\r\n * @param {Array} array 原数组\r\n * @return {Array}\r\n */\r\nfunction unique3(array) {\r\n    return Array.from(new Set(array))\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/**\r\n * \r\n * @param {Object} param0 \r\n * @return {Promise}\r\n */\r\nfunction axios({ method, url, params, data}) {\r\n    return new Promise((resolve, reject) => {\r\n        // 1. 创建http对象\r\n        const xhr = new XMLHttpRequest()\r\n        // 2. 初始化\r\n        //    --处理params参数成 a=100&b=200形式\r\n        let str = ''\r\n        for (const key in params) {\r\n            if (Object.hasOwnProperty.call(params, key)) {\r\n                const element = params[key];\r\n                str += `${key}=${element}&`\r\n            }\r\n        }\r\n\r\n        str = str.slice(0, -1)\r\n        // 3. 发起请求\r\n        xhr.open(method, url + '?' + str)\r\n        if(['POST', 'PUT', 'DELETE'].includes(method.toUpperCase())) {\r\n            // 设置content-type mime类型\r\n            xhr.setRequestHeader(\"Content-Type\", \"application/json\")\r\n            xhr.send(JSON.stringify(data))\r\n        }else {\r\n            xhr.send()\r\n        }\r\n\r\n        // 设置相应类型为json\r\n        xhr.responseType = 'json'\r\n        // 4. 处理结果\r\n        xhr.onreadystatechange = function() {\r\n            if(xhr.readyState === 4) {\r\n                // 判断响应码\r\n                if(xhr.status >= 200 && xhr.status < 300) {\r\n                    resolve({\r\n                        status: xhr.status,\r\n                        message: xhr.statusText,\r\n                        data: xhr.response\r\n                    })\r\n                } else {\r\n                    reject(new Error(\"请求失败,状态码为\" + xhr.status))\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n/**\r\n * @description get请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\n axios.get = (url, options) => {\r\n    return axios(Object.assign(options, { method: 'get', url: url}))\r\n}\r\n\r\n/**\r\n * @description post请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\naxios.post = (url, options) => {\r\n    return axios(Object.assign(options, { method: 'post', url: url}))\r\n}\r\n\r\n\r\n/**\r\n * @description post请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\n axios.put = (url, options) =>  {\r\n    return axios(Object.assign(options, { method: 'put', url: url}))\r\n}\r\n\r\n/**\r\n * @description post请求\r\n * @param {String} url 请求地址\r\n * @param {Object} options 请求参数\r\n * @return {Promise}\r\n */\r\n axios.delete = (url, options) =>  {\r\n    return axios(Object.assign(options, { method: 'delete', url: url}))\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/axios/index.js?");

/***/ }),

/***/ "./src/event-bind/index.js":
/*!*********************************!*\
  !*** ./src/event-bind/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventDelegation\": () => (/* binding */ eventDelegation)\n/* harmony export */ });\n/**\r\n * 事件委托、冒泡\r\n */\r\n\r\n/**\r\n * @description 事件委托\r\n * @param {String|HTMLElement} el 元素\r\n * @param {String} eventType 事件类型\r\n * @param {Function} fn 事件回调\r\n * @param {String} selector 子元素选择器\r\n */\r\nfunction eventDelegation(el, eventType, fn, selector) {\r\n    if(typeof el === 'string'){\r\n        el = document.querySelector(el)\r\n    }\r\n    // 事件绑定\r\n    if(!selector) {\r\n        // 没有传递子元素选择器，给el绑定事件\r\n        el.addEventListener(eventType, fn)\r\n    } else {\r\n        el.addEventListener(eventType, function(e){\r\n            // 获取点击的事件源\r\n            const target = e.target\r\n            //判断选择器与元素是否相符\r\n            if(target.matches(selector)){\r\n                fn.call(target)\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/event-bind/index.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\n\r\n/**\r\n *  事件总线（eventBus） \r\n * */\r\n\r\n\r\nclass EventBus{\r\n    constructor() {\r\n        this.callbacks = {}\r\n    }\r\n    /**\r\n     * @description 触发事件\r\n     * @param {String} type 事件名\r\n     * @param {Function} callback 回调函数\r\n     */\r\n    on(type, callback){\r\n        if(this.callbacks[type]) {\r\n            this.callbacks[type].push(callback)\r\n        }else {\r\n            // callbacks中没有该事件\r\n            this.callbacks[type] = [callback]\r\n        }\r\n    }\r\n    /**\r\n     * @description 触发事件\r\n     * @param {String} type 事件名\r\n     * @param {any} data 事件参数\r\n     */\r\n    emit(type, data){\r\n        if(this.callbacks[type] && this.callbacks[type].length > 0) {\r\n            this.callbacks[type].forEach(callback => {\r\n                callback(data)\r\n            });\r\n        } else {\r\n            throw new TypeError(\"没有该事件或该事件已被删除。。。\")\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @description 解绑事件(不传入则全部清除)\r\n     * @param {String} eventName 事件名称\r\n     */\r\n    off(eventName){\r\n        if(eventName) {\r\n            delete this.callbacks[eventName]\r\n        }else {\r\n            this.callbacks = {}\r\n        }\r\n    }\r\n}\r\n\r\nconst eventBus = new EventBus()\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/event-bus/index.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\n// apply作用跟call类似，但是函数参数是以数组形式传入，call是以单个参数传入\r\nfunction apply(Fn, obj, args) {\r\n    if (typeof Fn !== 'function') {\r\n        throw new TypeError(\"not a function\")\r\n    }\r\n    \r\n    obj = obj || globalThis;\r\n\r\n    obj.temp = Fn;\r\n    let result = obj.temp(...args)\r\n    delete obj.temp;\r\n    return result;\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n// bind类似于call，但是call会执行函数，bind会返回一个新的函数\r\nfunction bind(Fn, obj, ...args) {\r\n    if (typeof Fn !== 'function') {\r\n        throw new TypeError(\"not a function\")\r\n    }\r\n    \r\n    return function(...args2) {\r\n        // 执行call\r\n        return Fn.call(obj, ...args, ...args2)\r\n    }\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(Fn, obj, ...args) {\r\n    if(typeof Fn !== 'function') {\r\n        throw new TypeError(\"不是函数调用\")\r\n    }\r\n\r\n    obj = obj || globalThis;\r\n\r\n    // 为obj 添加临时方法\r\n    obj.temp = Fn;\r\n    let result = obj.temp(...args)\r\n    delete obj.temp\r\n    return result\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle),\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n\r\n/**\r\n * @description 函数防抖(等待时间内只执行一次)\r\n * @param {Function} callback 需要防抖的函数\r\n * @param {Number} wait 等待时间(毫秒)\r\n * @return {Function}\r\n */\r\n function throttle(callback, wait) {\r\n    let start = 0;\r\n    return function (event) {\r\n        let now = Date.now()\r\n        if (now - start >= wait) {\r\n            // 间隔大于设定时间,满足执行回调函数\r\n            callback.call(this, event)\r\n            // 修改开始时间\r\n            start = now\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * @description 节流(在上一次调用后，等待时间结束后执行一次)\r\n * @param {Function} callback 需要节流的函数\r\n * @param {Number} time 等待时间(毫秒)\r\n * @return {Function}\r\n */\r\n function debounce(callback, time) {\r\n    let timeId = null; //定时器\r\n    return function(event) {\r\n        const _this = this;\r\n        if(timeId != null) {\r\n            clearTimeout(timeId);\r\n        }\r\n        timeId = setTimeout(()=>{\r\n            // 因为箭头函数this指向上层this，所以这里写this效果相同\r\n            callback.call(_this, event);\r\n            timeId = null;\r\n        }, time)\r\n    }\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.reduce),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.some),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_decleares__WEBPACK_IMPORTED_MODULE_2__.filter),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_3__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_4__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_4__.dropRight),\n/* harmony export */   \"flatten\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten2),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_6__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_6__.pullAll),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_7__.unique),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_7__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_7__.unique3),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_8__.slice),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_index__WEBPACK_IMPORTED_MODULE_9__.axios),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _event_bus_index__WEBPACK_IMPORTED_MODULE_10__.eventBus),\n/* harmony export */   \"eventDelegation\": () => (/* reexport safe */ _event_bind_index__WEBPACK_IMPORTED_MODULE_11__.eventDelegation),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply_js__WEBPACK_IMPORTED_MODULE_12__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_13__.bind),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_14__.call),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_15__.throttle),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_15__.debounce),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_16__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_16__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_16__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_16__.deepClone4),\n/* harmony export */   \"customInstanceof\": () => (/* reexport safe */ _object_customInstanceof__WEBPACK_IMPORTED_MODULE_17__.customInstanceof),\n/* harmony export */   \"customNew\": () => (/* reexport safe */ _object_customNew__WEBPACK_IMPORTED_MODULE_18__.customNew),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _pub_sub_index__WEBPACK_IMPORTED_MODULE_19__.PubSub),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_20__.palindrome),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_20__.reverseString),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_20__.truncate)\n/* harmony export */ });\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_decleares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/decleares */ \"./src/array/decleares.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.js\");\n/* harmony import */ var _event_bus_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-bus/index */ \"./src/event-bus/index.js\");\n/* harmony import */ var _event_bind_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-bind/index */ \"./src/event-bind/index.js\");\n/* harmony import */ var _function_apply_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./function/apply.js */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_customInstanceof__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/customInstanceof */ \"./src/object/customInstanceof.js\");\n/* harmony import */ var _object_customNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/customNew */ \"./src/object/customNew.js\");\n/* harmony import */ var _pub_sub_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pub-sub/index */ \"./src/pub-sub/index.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n// 数组相关导出\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// axios\r\n\r\n\r\n// eventBus\r\n\r\n\r\n// eventDelegation, 事件委托\r\n\r\n\r\n// function相关\r\n\r\n\r\n\r\n\r\n\r\n//object相关\r\n\r\n\r\n\r\n// 订阅发布消息相关\r\n\r\n// 字符串相关\r\n\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n\r\n/**\r\n * @description 深拷贝1，常见拷贝方式(不能克隆方法，不能解决循环引用)\r\n * @param {Object} target \r\n * @return {Object}\r\n */\r\nfunction deepClone1(target) {\r\n    return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n/**\r\n * @description 深拷贝2，递归拷贝方式(克隆方法，不能解决循环引用)\r\n * @param {Object} target \r\n * @return {Object}\r\n */\r\nfunction deepClone2(target) {\r\n    if (typeof target === 'object' && target !== null) {\r\n        const result = Array.isArray(target) ? [] : {}\r\n        for (const key in target) {\r\n            if (Object.hasOwnProperty.call(target, key)) {\r\n                result[key] = deepClone2(target[key]);\r\n            }\r\n        }\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * @description 深拷贝3，递归拷贝方式(利用map,解决循环引用)\r\n * @param {Object} target \r\n * @param {Map} hash \r\n * @return {Object}\r\n */\r\nfunction deepClone3(target, hash = new Map()) {\r\n    if (typeof target === 'object' && target !== null) {\r\n        // 判断是否克隆过\r\n        if (hash.get(target)) {\r\n            return hash.get(target)\r\n        }\r\n        const result = Array.isArray(target) ? [] : {}\r\n        hash.set(target, result)\r\n        for (const key in target) {\r\n            if (Object.hasOwnProperty.call(target, key)) {\r\n                result[key] = deepClone3(target[key], hash);\r\n            }\r\n        }\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\r\n\r\n/**\r\n * @description 深拷贝4，递归拷贝方式(利用map,解决循环引用, 区分数组对象分别循环处理性能优化)\r\n * @param {Object} target \r\n * @param {Map} hash \r\n * @return {Object}\r\n */\r\nfunction deepClone4(target, hash = new Map()) {\r\n    if (typeof target === 'object' && target !== null) {\r\n        // 判断是否克隆过\r\n        if (hash.get(target)) {\r\n            return hash.get(target)\r\n        }\r\n        let isArr = Array.isArray(target)\r\n        \r\n        const result = isArr ? [] : {}\r\n        hash.set(target, result)\r\n        if(isArr) {\r\n            // 数组的情况下\r\n            target.forEach((item, index) => {\r\n                result[index] = deepClone4(item, hash);\r\n            })\r\n        } else {\r\n            // 对象的情况\r\n            Object.keys(target).forEach((key)=>{\r\n                result[key] = deepClone4(target[key], hash)\r\n            })\r\n        }\r\n        return result\r\n    } else {\r\n        return target\r\n    }\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/customInstanceof.js":
/*!****************************************!*\
  !*** ./src/object/customInstanceof.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customInstanceof\": () => (/* binding */ customInstanceof)\n/* harmony export */ });\n\r\n/**\r\n * @description 判断L是否在R原型上\r\n * @param {Object} L \r\n * @param {*} R \r\n * @return {Boolean}\r\n */\r\nfunction customInstanceof(L, R) {\r\n    let LP = L.__proto__\r\n    while (LP) {\r\n        if(LP === R.prototype){\r\n            return true\r\n        }\r\n        LP = LP.__proto__\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/object/customInstanceof.js?");

/***/ }),

/***/ "./src/object/customNew.js":
/*!*********************************!*\
  !*** ./src/object/customNew.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customNew\": () => (/* binding */ customNew)\n/* harmony export */ });\n\r\n/**\r\n * @description\r\n * @param {Function} fn \r\n * @param  {...any} args \r\n */\r\nfunction customNew(fn, ...args) {\r\n    // 1. 创建一个新对象\r\n    const obj = {}\r\n    // 2. 修改内部this，指向新对象\r\n    const result = fn.call(obj, ...args)\r\n    // 3. 修改新对象的原型\r\n    obj.__proto__ = fn.prototype\r\n    // 4. 返回新对象\r\n    // --4.1 如果构造函数有返回值且为对象，返回该对象\r\n    // --4.2 没有返回值或返回值不是对象，返回新对象\r\n    return result instanceof Object ? result : obj\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/object/customNew.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*\
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\n\r\n\r\nclass PubSubClass {\r\n    #id\r\n    constructor() {\r\n        this.#id = 1\r\n        this.callbacks = {}\r\n    }\r\n    /**\r\n     * @description 订阅\r\n     * @param {String} channel \r\n     * @param {Function} callback \r\n     */\r\n    subscribe(channel, callback) {\r\n        let token = \"token_\" + this.#id++\r\n        this.callbacks[channel] = this.callbacks[channel] || {}\r\n        this.callbacks[channel][token] = callback\r\n        // 返回唯一id\r\n        return token\r\n    }\r\n    /**\r\n     * @description 发布\r\n     * @param {String} channel \r\n     * @param {any} data \r\n     */\r\n    publish(channel, data) {\r\n        if(this.callbacks[channel]) {\r\n            Object.values(this.callbacks[channel]).forEach(fn => {\r\n                fn(data)\r\n            })\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @description 取消订阅\r\n     * @param {Number} type 退订类型(1退订单个订阅,2清空订阅频道,3全部清空)\r\n     * @param {String} flag 取消订阅的频道或者唯一id\r\n     */\r\n    unSubscribe(type, flag) {\r\n        switch(type) {\r\n            case 1: this.#unSubOfKey(flag); break\r\n            case 2: this.#unSubOfChannel(flag); break\r\n            case 3: this.#unSubOfAll(); break\r\n            default: throw new TypeError(\"type类型错误\");\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @description 清空所有订阅\r\n     */\r\n    #unSubOfAll() {\r\n        this.callbacks = {};\r\n    }\r\n\r\n    /**\r\n     * @description 清空单个订阅\r\n     * @param {String} key 订阅ID\r\n     */\r\n    #unSubOfKey(key) {\r\n        let callbackObj = Object.values(this.callbacks).find(item => item.hasOwnProperty(key))\r\n        if(callbackObj) {\r\n            delete callbackObj[key]\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @description 清空频道所有订阅\r\n     * @param {String} channel 频道名\r\n     */\r\n    #unSubOfChannel(channel) {\r\n        delete this.callbacks[channel]\r\n    }\r\n\r\n    \r\n}\r\n\r\nconst PubSub = new PubSubClass()\r\n\n\n//# sourceURL=webpack://kjsUtils/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n\r\n/**\r\n * @description 反转字符串\r\n * @param {String} str \r\n * @return {String}\r\n */\r\nfunction reverseString(str) {\r\n    // return [...str].reverse().join()\r\n    return str.split('').reverse().join('')\r\n}\r\n\r\n/**\r\n * @description 是否回文字符串\r\n * @param {String} str \r\n * @return {Boolean}\r\n */\r\nfunction palindrome(str) {\r\n    return reverseString(str) === str;\r\n}\r\n\r\n\r\n/**\r\n * @description 字符串截断\r\n * @param {String} str\r\n * @param {Number} size\r\n */\r\nfunction truncate(str, size) {\r\n    return str.slice(str, size) + '...'\r\n}\n\n//# sourceURL=webpack://kjsUtils/./src/string/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});