/**
 * @description 函数防抖(等待时间内只执行一次)
 * @param {Function} callback 需要防抖的函数
 * @param {Number} wait 等待时间(毫秒)
 * @return {Function}
 */
export declare function throttle(callback: any, wait: any): (event: any) => void;
/**
 * @description 节流(在上一次调用后，等待时间结束后执行一次)
 * @param {Function} callback 需要节流的函数
 * @param {Number} time 等待时间(毫秒)
 * @return {Function}
 */
export declare function debounce(callback: any, time: any): (event: any) => void;
