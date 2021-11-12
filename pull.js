
/**
 * @description 删除数组中的元素,返回删除的元素数组
 * @param {Array} array 
 * @param  {...any} args 
 * @return {Array}
 */
function pull(array, ...args) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(args.includes(element)){
            result.push(element)
            array.splice(i, 1)
            i--
        }
    }
    // result = array.filter(item => args.includes(item))
    // array = array.filter(item => !args.includes(item))
    return result
}

/**
 * @description  删除数组中的元素,返回删除的元素数组
 * @param {Array} array 
 * @param {Array} args 
 */
function pullAll(array, args) {
    return pull(array, ...args)
}