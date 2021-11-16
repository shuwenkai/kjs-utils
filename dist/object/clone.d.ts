/**
 * @description 深拷贝1，常见拷贝方式(不能克隆方法，不能解决循环引用)
 * @param {Object} target
 * @return {Object}
 */
export declare function deepClone1(target: any): any;
/**
 * @description 深拷贝2，递归拷贝方式(克隆方法，不能解决循环引用)
 * @param {Object} target
 * @return {Object}
 */
export declare function deepClone2(target: any): any;
/**
 * @description 深拷贝3，递归拷贝方式(利用map,解决循环引用)
 * @param {Object} target
 * @param {Map} hash
 * @return {Object}
 */
export declare function deepClone3(target: any, hash?: Map<any, any>): any;
/**
 * @description 深拷贝4，递归拷贝方式(利用map,解决循环引用, 区分数组对象分别循环处理性能优化)
 * @param {Object} target
 * @param {Map} hash
 * @return {Object}
 */
export declare function deepClone4(target: any, hash?: Map<any, any>): any;
