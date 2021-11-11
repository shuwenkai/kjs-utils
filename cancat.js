
/**
 * @description 数组合并
 * @param {Array} arr1 
 * @param {*} args 
 */
function concat(arr1, ...args) {
    let result = [...arr1]
    args.forEach(item => {
        if(Array.isArray(item)) {
            result = [...result, ...item]
        } else {
            result.push(item)
        }
    });
    return result
}