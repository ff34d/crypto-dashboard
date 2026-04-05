import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface IApiClient {
   get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
   post<T, K>(
      path: string,
      data?: K,
      config?: AxiosRequestConfig,
   ): Promise<AxiosResponse<T>>
}
