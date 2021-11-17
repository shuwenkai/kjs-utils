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
    export var get: (url: string, options: any) => Promise<unknown>;
    export var post: (url: string, options: any) => Promise<unknown>;
    export var put: (url: string, options: any) => Promise<unknown>;
    var _a: (url: string, options: any) => Promise<unknown>;
    export var getQuery: (url: string) => any;
    export { _a as delete };
}
