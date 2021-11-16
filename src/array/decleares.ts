/**
 * @Desc 数组相关方法
 * @Author wk.Shu
 * @Date 2021-11-11
 */

type CallBack = (item: any, index: number, arr: Array<any>)=>{}
/**
 * @description 数组遍历
 * @param {Array} arr 调用数组
 * @param {Function} callback 回调函数
 * @return {Array}
 */
export function map(arr:Array<any>, callback: CallBack):Array<any> {
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
 * @return {Number | String}
 */
export function reduce(arr:Array<any>, callback: Function, initValue:number|string = 0): number|string {
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
export function filter(arr:Array<any>, callback:Function):Array<any> {
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
export function find(arr:Array<any>, callback:Function):any {
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
export function findIndex(arr:Array<any>, callback:Function):number {
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
export function every(arr:Array<any>, callback:Function):boolean {
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
export function some(arr:Array<any>, callback:Function):boolean{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(callback(element, i, arr)) {
            return true
        }
    }
    return false
}