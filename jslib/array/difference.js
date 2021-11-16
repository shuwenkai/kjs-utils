
/**
 * @description 数组取差集
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 */
export function difference(arr1, arr2){
    if(arr1.length === 0) {
        return []
    }else if(arr2.length === 0) {
        return [...arr1]
    }
    return arr1.filter(item => !arr2.includes(item));
}