export declare class PubSubClass {
    private id;
    private callbacks;
    constructor();
    /**
     * @description 订阅
     * @param {String} channel
     * @param {Function} callback
     */
    subscribe(channel: any, callback: any): string;
    /**
     * @description 发布
     * @param {String} channel
     * @param {any} data
     */
    publish(channel: string, data: any): void;
    /**
     * @description 取消订阅
     * @param {Number} type 退订类型(1退订单个订阅,2清空订阅频道,3全部清空)
     * @param {String} flag 取消订阅的频道或者唯一id
     */
    unSubscribe(type: any, flag: any): void;
    /**
     * @description 清空所有订阅
     */
    private unSubOfAll;
    /**
     * @description 清空单个订阅
     * @param {String} key 订阅ID
     */
    private unSubOfKey;
    /**
     * @description 清空频道所有订阅
     * @param {String} channel 频道名
     */
    private unSubOfChannel;
}
export declare const PubSub: PubSubClass;
