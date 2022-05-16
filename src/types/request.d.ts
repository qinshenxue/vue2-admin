import Vue from 'vue'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}

export interface Response {
  code: number
  data: any
  msg: string
  success: boolean
}

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any, R = AxiosResponse<Response>>(
      config: AxiosRequestConfig
    ): Promise<R>
    get<T = any, R = AxiosResponse<Response>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    delete<T = any, R = AxiosResponse<Response>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    head<T = any, R = AxiosResponse<Response>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>
    post<T = any, R = AxiosResponse<Response>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>
    put<T = any, R = AxiosResponse<Response>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>
    patch<T = any, R = AxiosResponse<Response>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>
  }
}
