import type { Axios, AxiosInstance } from "axios"
import MockAdapter from "axios-mock-adapter"
import { ApiEndpoint } from "../configs"

export function apiMockService(axios: Axios) {
   const m = new MockAdapter(axios as AxiosInstance)

   m.onGet(ApiEndpoint.GET_COIN).reply(200, {
      res: "ok",
   })
}
