/**
 *
 * @param {Object} param0
 * @return {Promise}
 */
export declare function axios({ method, url, params, data }: {
    method: any;
    url: any;
    params: any;
    data: any;
}): Promise<unknown>;
export declare namespace axios {
    export var get: (url: any, options: any) => Promise<unknown>;
    export var post: (url: any, options: any) => Promise<unknown>;
    export var put: (url: any, options: any) => Promise<unknown>;
    var _a: (url: any, options: any) => Promise<unknown>;
    export { _a as delete };
}
