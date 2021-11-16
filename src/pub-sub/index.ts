
export class PubSubClass {
    private id:number
    private callbacks = {}
    constructor() {
        this.id = 1
        this.callbacks = {}
    }
    /**
     * @description 订阅
     * @param {String} channel 
     * @param {Function} callback 
     */
    subscribe(channel, callback) {
        let token = "token_" + this.id++
        this.callbacks[channel] = this.callbacks[channel] || {}
        this.callbacks[channel][token] = callback
        // 返回唯一id
        return token
    }
    /**
     * @description 发布
     * @param {String} channel 
     * @param {any} data 
     */
    publish(channel: string, data) {
        if(this.callbacks[channel]) {
            Object.values(this.callbacks[channel]).forEach((fn: Function) => {
                fn(data)
            })
        }
    }

    /**
     * @description 取消订阅
     * @param {Number} type 退订类型(1退订单个订阅,2清空订阅频道,3全部清空)
     * @param {String} flag 取消订阅的频道或者唯一id
     */
    unSubscribe(type, flag) {
        switch(type) {
            case 1: this.unSubOfKey(flag); break
            case 2: this.unSubOfChannel(flag); break
            case 3: this.unSubOfAll(); break
            default: throw new TypeError("type类型错误");
        }
    }

    /**
     * @description 清空所有订阅
     */
    private unSubOfAll() {
        this.callbacks = {};
    }

    /**
     * @description 清空单个订阅
     * @param {String} key 订阅ID
     */
    private unSubOfKey(key) {
        let callbackObj = Object.values(this.callbacks).find(item => item.hasOwnProperty(key))
        if(callbackObj) {
            delete callbackObj[key]
        }
    }

    /**
     * @description 清空频道所有订阅
     * @param {String} channel 频道名
     */
    private unSubOfChannel(channel) {
        delete this.callbacks[channel]
    }

    
}

export const PubSub = new PubSubClass()
