/**
 * 
 * @param {Object} param0 
 * @return {Promise}
 */
export function axios({ method, url, params, data}) {
    return new Promise((resolve, reject) => {
        // 1. 创建http对象
        const xhr = new XMLHttpRequest()
        // 2. 初始化
        //    --处理params参数成 a=100&b=200形式
        let str = ''
        for (const key in params) {
            if (Object.hasOwnProperty.call(params, key)) {
                const element = params[key];
                str += `${key}=${element}&`
            }
        }

        str = str.slice(0, -1)
        // 3. 发起请求
        xhr.open(method, url + '?' + str)
        if(['POST', 'PUT', 'DELETE'].includes(method.toUpperCase())) {
            // 设置content-type mime类型
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.send(JSON.stringify(data))
        }else {
            xhr.send()
        }

        // 设置相应类型为json
        xhr.responseType = 'json'
        // 4. 处理结果
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                // 判断响应码
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        status: xhr.status,
                        message: xhr.statusText,
                        data: xhr.response
                    })
                } else {
                    reject(new Error("请求失败,状态码为" + xhr.status))
                }
            }
        }
    })
}

/**
 * @description get请求
 * @param {String} url 请求地址
 * @param {Object} options 请求参数
 * @return {Promise}
 */
 axios.get = (url: string, options) => {
    return axios(Object.assign(options, { method: 'get', url: url}))
}

/**
 * @description post请求
 * @param {String} url 请求地址
 * @param {Object} options 请求参数
 * @return {Promise}
 */
axios.post = (url: string, options) => {
    return axios(Object.assign(options, { method: 'post', url: url}))
}


/**
 * @description post请求
 * @param {String} url 请求地址
 * @param {Object} options 请求参数
 * @return {Promise}
 */
 axios.put = (url: string, options) =>  {
    return axios(Object.assign(options, { method: 'put', url: url}))
}

/**
 * @description post请求
 * @param {String} url 请求地址
 * @param {Object} options 请求参数
 * @return {Promise}
 */
 axios.delete = (url: string, options) =>  {
    return axios(Object.assign(options, { method: 'delete', url: url}))
}


/**
 * @description 获取地址栏参数
 * @param url 需要获取地址的参数
 */
axios.getQuery = (url: string) => {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
        '{"' +
          decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            .replace(/\+/g, ' ') +
          '"}'
      )
}