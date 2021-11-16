/**
 * @description 数组去重(借用includes或者indexof方法，实际两层循环)
 * @param {Array} array 原数组
 * @return {Array}
 */
export declare function unique(array: any): any[];
/**
 * @description 数组去重2(借用对象)，一层循环完成
 * @param {Array} array 原数组
 * @return {Array}
 */
export declare function unique2(array: any): any[];
/**
 * @description 数组去重3(借用ES6集合Set, 代码简洁)
 * @param {Array} array 原数组
 * @return {Array}
 */
export declare function unique3(array: any): unknown[];
