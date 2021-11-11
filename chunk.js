
/**
 * @description 数组分块
 * @param {Array} array 原数组
 * @param {Number} size 分块大小
 * @return {Array}
 */
function chunk(array, size = 1) {
    if(!Array.isArray(array)) {
        throw new TypeError("not a array")
    }
    if(array.length === 0){
        return []
    }

    let result = []
    let tmp = []

    array.forEach(item => {
        if(tmp.length === 0) {
            result.push(tmp)
        }

        tmp.push(item)

        if(tmp.length === size) {
            tmp = []
        }
    })

    return result
}