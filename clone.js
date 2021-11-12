
/**
 * @description 深拷贝1，常见拷贝方式(不能克隆方法，不能解决循环引用)
 * @param {Object} target 
 * @return {Object}
 */
function deepClone1(target) {
    return JSON.parse(JSON.stringify(target))
}

/**
 * @description 深拷贝2，递归拷贝方式(克隆方法，不能解决循环引用)
 * @param {Object} target 
 * @return {Object}
 */
function deepClone2(target) {
    if (typeof target === 'object' && target !== null){
        const result = Array.isArray(target) ? [] : {}
        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {
                result[key] = deepClone2(target[key]);
            }
        }
        return result
    }else {
        return target
    }
}


/**
 * @description 深拷贝3，递归拷贝方式(利用map,解决循环引用)
 * @param {Object} target 
 * @param {Map} hash 
 * @return {Object}
 */
 function deepClone3(target, hash = new Map()) {
    if (typeof target === 'object' && target !== null){
        // 判断是否克隆过
        if(hash.get(target)){
            return hash.get(target)
        } 
        const result = Array.isArray(target) ? [] : {}
        hash.set(target, result)
        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {
                result[key] = deepClone3(target[key], hash);
            }
        }
        return result
    } else {
        return target
    }
}