
/**
 * @description 数组去重(借用includes或者indexof方法，实际两层循环)
 * @param {Array} array 原数组
 * @return {Array}
 */
export function unique(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!result.includes(element)){
            result.push(element)
        }
    }
    return result
}

/**
 * @description 数组去重2(借用对象)，一层循环完成
 * @param {Array} array 原数组
 * @return {Array}
 */
export function unique2(array) {
    let result = []
    let tmp = {}
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if(!tmp[item]){
            tmp[item] = true
            result.push(item)
        }
    }
    return result
}

/**
 * @description 数组去重3(借用ES6集合Set, 代码简洁)
 * @param {Array} array 原数组
 * @return {Array}
 */
export function unique3(array) {
    return Array.from(new Set(array))
}