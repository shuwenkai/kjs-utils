
/**
 * @description 格式化日期时间
 * @param date 格式化的时间戳或者时间对象
 * @param format 格式(yyyy-mm-dd)
 */
export function dateFormat(date: number | Date, fmt: string): string {
    let ret
    if (!(date instanceof Date)) {
        // 判断是否时间对象类型, 
        date = new Date(date)
    }
    const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'h+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (const k in opt) {
        let reg = new RegExp('(' + k + ')')
        ret = reg.exec(fmt)
        if (ret) {
            // 判断长度，如果长度不够，就在字符串前面补充0至相应位数，主要小于十月，小于十号之类的情况
            let strReplace = (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0'))
            // 替换字符串
            fmt = fmt.replace(ret[1], strReplace)
        }
    }
    return fmt
}
