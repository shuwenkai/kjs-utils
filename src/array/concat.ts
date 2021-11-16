/**
 * @description 数组合并
 * @param {Array} arr1 
 * @param {*} args 
 */
 export function concat(arr1:Array<any>, ...args:any):Array<any> {
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