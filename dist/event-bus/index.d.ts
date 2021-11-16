export declare class EventBus {
    callbacks: Object;
    constructor();
    /**
     * @description 触发事件
     * @param {String} type 事件名
     * @param {Function} callback 回调函数
     */
    on(type: any, callback: any): void;
    /**
     * @description 触发事件
     * @param {String} type 事件名
     * @param {any} data 事件参数
     */
    emit(type: any, data: any): void;
    /**
     * @description 解绑事件(不传入则全部清除)
     * @param {String} eventName 事件名称
     */
    off(eventName: any): void;
}
export declare const eventBus: EventBus;
