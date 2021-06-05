import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
enum IHttpMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
}

const methods = ['get', 'post', 'delete', 'put']

interface IHttpFn {
  <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
}

type IHttp = Record<IHttpMethods, IHttpFn>

const httpMethods: IHttp = methods.reduce((map: any, method: string) => {
  map[method] = (url: string, options: AxiosRequestConfig = {}) => {
    const { data, ...config } = options
    return (axios as any)
      [method](url, data, config)
      .then((res: AxiosResponse) => {
        if (res.data.errCode) {
          //todo somethins
        } else {
          //todo somethins
        }
      })
  }
  return map
}, {})

export default httpMethods
