import { ApiEndpoint } from "@shared/api"
import { app, Mapper } from "@shared/lib"
import type { ICoinByListMap, ICoinByMarket } from "../models"

class CoinService {
   async getCoinsListMapCached() {
      return Mapper.requestWithCache(
         async () => {
            const { data } = await app.api.get<ICoinByListMap[]>(
               ApiEndpoint.GET_COINS_LIST_MAP,
            )
            return data
         },
         ["coins_list_map"],
         { revalidate: 3600 },
      )
   }

   async getCoinsMarkets(peerPage: number, page: number) {
      return await app.api.get<ICoinByMarket[]>(ApiEndpoint.GET_COINS_MARKETS, {
         params: {
            peer_page: peerPage,
            page,
         },
      })
   }
}

export const coinService = new CoinService()
