import { ApiEndpoint } from "@shared/api"
import { app, Mapper } from "@shared/lib"
import type { ICoinByListMap, ICoinByMarket, ICoinByMarketsDTO } from "../models"

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

   async getCoinsMarkets(peer_page: number, page: number) {
      return await app.api.get<ICoinByMarket[]>(ApiEndpoint.GET_COINS_MARKETS, {
         params: { peer_page, page },
      })
   }

   // ========== Utils ==========

   /**
    * Transform coins market array to locale DTO.
    */
   transformCoinsMarketsToDTO(data: ICoinByMarket[]): ICoinByMarketsDTO[] {
      return [...data].map((v) => ({
         id: v?.id,
         market_cap_rank: v?.market_cap_rank || 0,
         image: v?.image,
         symbol: v?.symbol,
         name: v?.name,
         price_change_percentage_24h: v?.price_change_percentage_24h || 0,
         current_price: v?.current_price?.toLocaleString() || "0",
         low_24h: v?.low_24h?.toLocaleString() || "0",
         high_24h: v?.high_24h?.toLocaleString() || "0",
         total_volume: v?.total_volume?.toLocaleString() || "0",
         market_cap_change_24h: v?.market_cap_change_24h?.toLocaleString() || "0",
      }))
   }
}

export const coinService = new CoinService()
