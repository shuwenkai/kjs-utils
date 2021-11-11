
/**
 * @description 函数防抖(等待时间内只执行一次)
 * @param {Function} callback 需要防抖的函数
 * @param {Number} wait 等待时间(毫秒)
 * @return {Function}
 */
function throttle(callback, wait) {
    let start = 0;
    return function (event) {
        let now = Date.now()
        if (now - start >= wait) {
            // 间隔大于设定时间,满足执行回调函数
            callback.call(this, event)
            // 修改开始时间
            start = now
        }
    }
}


/**
 * @description 节流(在上一次调用后，等待时间结束后执行一次)
 * @param {Function} callback 需要节流的函数
 * @param {Number} time 等待时间(毫秒)
 * @return {Function}
 */
function debounce(callback, time) {
    let timeId = null; //定时器
    return function(event) {
        const _this = this;
        if(timeId != null) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(()=>{
            // 因为箭头函数this指向上层this，所以这里写this效果相同
            callback.call(_this, event);
            timeId = null;
        }, time)
    }
}