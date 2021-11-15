
/**
 * @description 反转字符串
 * @param {String} str 
 * @return {String}
 */
export function reverseString(str) {
    // return [...str].reverse().join()
    return str.split('').reverse().join('')
}

/**
 * @description 是否回文字符串
 * @param {String} str 
 * @return {Boolean}
 */
export function palindrome(str) {
    return reverseString(str) === str;
}


/**
 * @description 字符串截断
 * @param {String} str
 * @param {Number} size
 */
export function truncate(str, size) {
    return str.slice(str, size) + '...'
}