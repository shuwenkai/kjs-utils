// 数组相关导出
export { chunk } from './array/chunk'
export { concat } from './array/concat'
export { map, reduce, find, findIndex, every, some, filter } from './array/decleares'
export { difference } from './array/difference'
export { drop, dropRight } from './array/drop'
export { flatten, flatten2 } from './array/flatten'
export { pull, pullAll } from './array/pull'
export { unique, unique2, unique3 } from './array/unique'
export { slice } from './array/slice'

// axios
export { axios } from './axios/index'

// eventBus
export { eventBus } from './event-bus/index'

// eventDelegation, 事件委托
export { eventDelegation } from './event-bind/index'
// function相关
export { apply } from './function/apply.js'
export { bind } from './function/bind'
export { call } from './function/call'
export { throttle, debounce } from './function/throttle'

//object相关
export { deepClone1, deepClone2, deepClone3, deepClone4 } from './object/clone'
export { customInstanceof } from './object/customInstanceof'
export { customNew } from './object/customNew'
// 订阅发布消息相关
export { PubSub } from './pub-sub/index'
// 字符串相关
export { palindrome, reverseString, truncate } from './string/index'

export default {
    chunk,
    concat,
    map, reduce, find, findIndex, every, some, filter,
    difference,
    drop,
    dropRight,
    flatten,
    flatten2,
    pull,
    pullAll,
    unique,
    unique2,
    unique3,
    slice,
    axios,
    eventBus,
    eventDelegation,
    apply,
    bind,
    call,
    throttle, debounce,
    deepClone1, deepClone2, deepClone3, deepClone4,
    customInstanceof,
    customNew,
    PubSub,
    palindrome, reverseString, truncate
}