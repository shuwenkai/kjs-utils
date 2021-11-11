function call(Fn, obj, ...args) {
    if(typeof Fn !== 'function') {
        throw new TypeError("不是函数调用")
    }

    obj = obj || globalThis;

    // 为obj 添加临时方法
    obj.temp = Fn;
    let result = obj.temp(...args)
    delete obj.temp
    return result
}