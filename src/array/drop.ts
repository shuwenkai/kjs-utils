
/**
 * @description 获取数组部分元素
 * @param {Array} array 
 * @param {Number} size 
 * @return {Array}
 */
export function drop(array:Array<any>, size: number): Array<any> {
    return array.filter((item,i) => i >= size)
}

/**
 * @description 获取数组部分元素(从尾部开始)
 * @param {Array} array 
 * @param {*} size 
 * @return {Array} 
 */
export function dropRight(array:Array<any>, size: number): Array<any>  {
    return array.filter((_,i) => i < array.length - size)
}