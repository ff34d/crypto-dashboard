import type { Axios, AxiosInstance } from "axios"
import MockAdapter from "axios-mock-adapter"
import { ApiEndpoint } from "../configs"
import coinListMapResponse from "./coinListMapResponse.json"
import coinMarketsResponse from "./coinMarketsResponse.json"

export function apiMockService(axios: Axios) {
   const m = new MockAdapter(axios as AxiosInstance, { delayResponse: 800 })

   m.onGet(ApiEndpoint.GET_COINS_LIST_MAP).reply(200, coinListMapResponse.slice(0, 100))

   m.onGet(ApiEndpoint.GET_COINS_MARKETS).reply((config) => {
      const { page, peer_page } = config.params

      const start = peer_page * (page === 1 ? 0 : page)
      const end = start + peer_page

      return [200, coinMarketsResponse.slice(start, end)]
   })
}
