import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import { notification } from '@qinsx/ant-design-vue'
import { PluginObject } from 'vue'
import { Vue } from 'vue-property-decorator'

const client: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

const errorHandler = (error: AxiosError) => {
  if (error.response) {
    const { status } = error.response
    if (status === 401) {
      notification.error({
        message: '登录过期，请重新登录',
        description: ''
      })
    } else {
      notification.error({
        message: '接口请求错误',
        description: error.message
      })
    }
    return Promise.reject(error)
  } else {
    if (error.message) {
      notification.error({
        message: '接口请求错误',
        description: error.message
      })
    }
    return Promise.reject(error)
  }
}

client.interceptors.request.use((config: AxiosRequestConfig) => {
  //   if (config.baseURL !== 'xxx') {
  //     throw new Error('xxx')
  //   }
  return config
}, errorHandler)

client.interceptors.response.use((reponse: AxiosResponse) => {
  return reponse
}, errorHandler)

const plugin: PluginObject<Vue> = {
  install: function (vue) {
    vue.prototype.$http = client
  }
}

export default plugin
