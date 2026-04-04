import axios, { Axios, AxiosError, AxiosRequestConfig } from "axios"
import { ApiError } from "./ApiError"

export class ApiClient {
   readonly #INSTANCE: Axios

   constructor() {
      this.#INSTANCE = axios.create({
         baseURL: process.env.NEXT_PUBLIC_API_URL,
         headers: {
            "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY,
         },
      })

      this.#handleSetupInterceptors()
   }

   #handleSetupInterceptors(): void {
      this.#INSTANCE.interceptors.response.use(
         (response) => response.data,
         (error) => this.#handleError(error),
      )
   }

   /**
    * Throw api error.
    * Status code (-1): is an unhandled error code.
    */
   #handleError(error: AxiosError | Error): void {
      throw new ApiError(
         error?.message || "Unknown error",
         (error as AxiosError)?.status || -1,
      )
   }

   // ==============================
   // API Methods
   // ==============================

   protected async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
      return await this.#INSTANCE.get(path, config)
   }

   protected async post<T, K>(
      path: string,
      data?: K,
      config?: AxiosRequestConfig,
   ): Promise<T> {
      return await this.#INSTANCE.post(path, data, config)
   }
}
