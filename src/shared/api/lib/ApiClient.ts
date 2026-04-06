import type { ILogger } from "@shared/models"
import type { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

import type { IApiClient } from "../models"

/**
 * REST API client.
 */
export class ApiClient implements IApiClient {
   readonly #LOGGER: ILogger
   readonly #INSTANCE: Axios

   constructor(instance: Axios, logger: ILogger) {
      this.#LOGGER = logger
      this.#INSTANCE = instance

      this.#setupInterceptors()
      this.#LOGGER.log("Setup success ✅")
   }

   // ========== Setup interceptors ==========
   #setupInterceptors(): void {
      this.#INSTANCE.interceptors.response.use(
         (response) => response,
         (error) => this.#handleError(error),
      )
   }

   // ========== Handle error ==========
   #handleError(error: AxiosError | Error): void {
      this.#LOGGER.error(error?.message || "Unknown error")
      throw error
   }

   // ==============================
   // REST API methods
   // ==============================

   public async get<T>(
      path: string,
      config?: AxiosRequestConfig,
   ): Promise<AxiosResponse<T>> {
      return await this.#INSTANCE.get(path, config)
   }

   public async post<T, K>(
      path: string,
      data?: K,
      config?: AxiosRequestConfig,
   ): Promise<AxiosResponse<T>> {
      return await this.#INSTANCE.post(path, data, config)
   }
}
