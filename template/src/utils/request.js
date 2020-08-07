import axios from 'axios'

const host = process.env.NODE_ENV === 'production' ? '' : ''

const service = axios.create({
    baseURL: host,
    withCredentials: true,
    timeout: 10000
})

// 1.2 配置请求拦截器
service.interceptors.request.use(
    config => {
        const secret = store.state.secret;
        config.headers['Access-Control-Allow-Origin'] = '*'

        config.headers['secret'] = secret
        if (config.contentType) {
            config.headers['Content-Type'] = config.contentType
        } else {
            config.headers['Content-Type'] = 'application/json'
            config.data = JSON.stringify(config.data)
        }

        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 1.3 配置响应拦截器
service.interceptors.response.use(
    res => {
        return res
    },
    err => {
        return Promise.reject(err)
    }
)

export default service