/**
 * 事件委托、冒泡
 */

/**
 * @description 事件委托
 * @param {String|HTMLElement} el 元素
 * @param {String} eventType 事件类型
 * @param {Function} fn 事件回调
 * @param {String} selector 子元素选择器
 */
export function eventDelegation(el, eventType, fn, selector) {
    if(typeof el === 'string'){
        el = document.querySelector(el)
    }
    // 事件绑定
    if(!selector) {
        // 没有传递子元素选择器，给el绑定事件
        el.addEventListener(eventType, fn)
    } else {
        el.addEventListener(eventType, function(e){
            // 获取点击的事件源
            const target = e.target
            //判断选择器与元素是否相符
            if(target.matches(selector)){
                fn.call(target)
            }
        })
    }
}