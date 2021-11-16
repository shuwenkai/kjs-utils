interface TmpType extends Object {
    __proto__?: any
}
/**
 * @description
 * @param {Function} fn 
 * @param  {...any} args 
 */
export function customNew(fn, ...args) {
    // 1. 创建一个新对象
    const obj:TmpType = {}
    // 2. 修改内部this，指向新对象
    const result = fn.call(obj, ...args)
    // 3. 修改新对象的原型
    obj.__proto__ = fn.prototype
    // 4. 返回新对象
    // --4.1 如果构造函数有返回值且为对象，返回该对象
    // --4.2 没有返回值或返回值不是对象，返回新对象
    return result instanceof Object ? result : obj
}