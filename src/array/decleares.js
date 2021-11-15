/**
 * @Desc 数组相关方法
 * @Author wk.Shu
 * @Date 2021-11-11
 */


/**
 * @description 数组遍历
 * @param {Array} arr 调用数组
 * @param {Function} callback 回调函数
 * @return {Array}
 */
export function map(arr, callback) {
    if(!Array.isArray(arr)) {
        throw new TypeError("not a array, please in array")
    }
    // 声明一个空数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // 执行回掉
        const element = arr[i];
        result.push(callback(element, i, arr))
    }
    return result;
}

/**
 * @description 数组reduce方法
 * @param {Array} arr 调用数组
 * @param {Function} callback 回调函数
 * @param {Number} initValue 初始值
 * @return {Array}
 */
export function reduce(arr, callback, initValue = 0) {
    let result = initValue;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result = callback(result, element, i, arr)
    }
    return result;
}

/**
 * @description 数组过滤
 * @param {Array} arr 原数组
 * @param {Function} callback 回调函数
 * @return {Array}
 */
export function filter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // 如果结果为真，放入result数组
        if(callback(element, i, arr)) {
            result.push(element)
        }
    }
    return result
}

/**
 * @description 数组查找
 * @param {Array} arr 原数组
 * @param {Function} callback 回调函数
 * @return {*}
 */
export function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(callback(element, i, arr)) {
            return element
        }
    }
}

/**
 * @description 数组查找下标
 * @param {Array} arr 原数组
 * @param {Function} callback 回调函数
 * @return {Number}
 */
export function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(callback(element, i, arr)) {
            return i
        }
    }
    return -1
}

/**
 * @description 数组所有元素是否满足条件
 * @param {Array} arr 
 * @param {Function} callback 
 * @return {Boolean}
 */
export function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(!callback(element, i, arr)) {
            return false
        }
    }
    return true
}

/**
 * @description 数组是否有元素满足条件
 * @param {Array} arr 
 * @param {function} callback 
 * @return {Boolean}
 */
export function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(callback(element, i, arr)) {
            return true
        }
    }
    return false
}