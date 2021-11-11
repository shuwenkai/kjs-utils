
/**
 * @description 数组切片(左闭右开)
 * @param {Array} array 
 * @param {Number} start 
 * @param {Number} end 
 */
function slice(array, start = 0, end){
    let result = []
    if(array.length === 0 || start >= array.length) {
        return []
    }

    // 如果参数为负数，则从最后开始往前取
    if(start < 0 && !end) {
        for (let i = array.length + start; i < array.length; i++) {
            result.push(array[i])
        }
        return result
    }

    end = end || array.length
    if(end < start) {
        end = array.length
    }
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(i >= start && i < end) {
            result.push(element)
        }
    }
    return result
}