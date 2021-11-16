/**
 * @Desc 数组相关方法
 * @Author wk.Shu
 * @Date 2021-11-11
 */
declare type CallBack = (item: any, index: number, arr: Array<any>) => {};
/**
 * @description 数组遍历
 * @param {Array} arr 调用数组
 * @param {Function} callback 回调函数
 * @return {Array}
 */
export declare function map(arr: Array<any>, callback: CallBack): Array<any>;
/**
 * @description 数组reduce方法
 * @param {Array} arr 调用数组
 * @param {Function} callback 回调函数
 * @param {Number} initValue 初始值
 * @return {Number | String}
 */
export declare function reduce(arr: Array<any>, callback: Function, initValue?: number | string): number | string;
/**
 * @description 数组过滤
 * @param {Array} arr 原数组
 * @param {Function} callback 回调函数
 * @return {Array}
 */
export declare function filter(arr: Array<any>, callback: Function): Array<any>;
/**
 * @description 数组查找
 * @param {Array} arr 原数组
 * @param {Function} callback 回调函数
 * @return {*}
 */
export declare function find(arr: Array<any>, callback: Function): any;
/**
 * @description 数组查找下标
 * @param {Array} arr 原数组
 * @param {Function} callback 回调函数
 * @return {Number}
 */
export declare function findIndex(arr: Array<any>, callback: Function): number;
/**
 * @description 数组所有元素是否满足条件
 * @param {Array} arr
 * @param {Function} callback
 * @return {Boolean}
 */
export declare function every(arr: Array<any>, callback: Function): boolean;
/**
 * @description 数组是否有元素满足条件
 * @param {Array} arr
 * @param {function} callback
 * @return {Boolean}
 */
export declare function some(arr: Array<any>, callback: Function): boolean;
export {};
