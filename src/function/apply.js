// apply作用跟call类似，但是函数参数是以数组形式传入，call是以单个参数传入
export function apply(Fn, obj, args) {
    if (typeof Fn !== 'function') {
        throw new TypeError("not a function")
    }
    
    obj = obj || globalThis;

    obj.temp = Fn;
    let result = obj.temp(...args)
    delete obj.temp;
    return result;
}