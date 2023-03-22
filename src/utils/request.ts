import axios, { AxiosRequestConfig } from 'axios'
import { message, notification } from 'antd'
import { getToken } from './auth'

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers!.token = token
    }
    return config
  },
  (error) => {
    console.error('error', error)
    message.error('网络异常')
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data) {
      if (data.code !== 0) {
        notification.error({
          message: data.message,
        })
        return Promise.reject(new Error(data.message || 'Error'))
      }
    }
    return Promise.resolve(data)
  },
  (error) => {
    console.error('error', error)
    return Promise.reject(error)
  },
)

export default function request<T = any>(config: AxiosRequestConfig): Promise<Response<T>> {
  return new Promise((resolve, reject) => {
    axiosInstance.request(config).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
