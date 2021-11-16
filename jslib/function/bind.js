// bind类似于call，但是call会执行函数，bind会返回一个新的函数
export function bind(Fn, obj, ...args) {
    if (typeof Fn !== 'function') {
        throw new TypeError("not a function")
    }
    
    return function(...args2) {
        // 执行call
        return Fn.call(obj, ...args, ...args2)
    }
}