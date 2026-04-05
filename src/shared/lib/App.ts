import type { IApiClient } from "@shared/api"
import { ApiClient, axiosInstance } from "@shared/api"
import type { IApp } from "@shared/models"
import { Logger } from "./Logger"

class App implements IApp {
   readonly api: IApiClient

   constructor() {
      this.api = new ApiClient(axiosInstance, new Logger("API_CLIENT"))
   }
}

/**
 * The application's main entry point.
 */
export const app = new App()
