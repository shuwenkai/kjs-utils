
/**
 *  事件总线（eventBus） 
 * */


class EventBus{
    constructor() {
        this.callbacks = {}
    }
    /**
     * @description 触发事件
     * @param {String} type 事件名
     * @param {Function} callback 回调函数
     */
    on(type, callback){
        if(this.callbacks[type]) {
            this.callbacks[type].push(callback)
        }else {
            // callbacks中没有该事件
            this.callbacks[type] = [callback]
        }
    }
    /**
     * @description 触发事件
     * @param {String} type 事件名
     * @param {any} data 事件参数
     */
    emit(type, data){
        if(this.callbacks[type] && this.callbacks[type].length > 0) {
            this.callbacks[type].forEach(callback => {
                callback(data)
            });
        } else {
            throw new TypeError("没有该事件或该事件已被删除。。。")
        }
    }

    /**
     * @description 解绑事件(不传入则全部清除)
     * @param {String} eventName 事件名称
     */
    off(eventName){
        if(eventName) {
            delete this.callbacks[eventName]
        }else {
            this.callbacks = {}
        }
    }
}

export const eventBus = new EventBus()
