
/**
 * @description 判断L是否在R原型上
 * @param {Object} L 
 * @param {*} R 
 * @return {Boolean}
 */
function customInstanceof(L, R) {
    let LP = L.__proto__
    while (LP) {
        if(LP === R.prototype){
            return true
        }
        LP = LP.__proto__
    }
    return false
}