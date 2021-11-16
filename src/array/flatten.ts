
/**
 * @description 数组扁平化
 * @param {Array} array 
 */
export function flatten(array:Array<any>):Array<any> {
    let result = []
    array.forEach(item => {
        if(Array.isArray(item)) {
            result = [...result, ...flatten(item)]
        } else {
            result.push(item)
        }
    })
    return result
}

/**
 * @description 数组扁平化
 * @param {Array} array 
 */
export function flatten2(array:Array<any>):Array<any> {
    let result = [...array]
    
    while(result.some(item => Array.isArray(item))) {
        result = [].concat(...result)
    }
    
    return result
}

