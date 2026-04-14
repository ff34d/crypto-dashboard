import type { ICoin } from "./ICoin"

/**
 * Coin by market, with all the data you need to know about a coin market response.
 *
 * @see {@link https://docs.coingecko.com/v3.0.1/reference/coins-markets|Coingecko docs, get coins markets}
 */
export interface ICoinByMarket extends ICoin {
   image: string
   current_price: number
   market_cap: number
   fully_diluted_valuation: number
   total_volume: number
   high_24h: number
   low_24h: number
   price_change_24h: number
   price_change_percentage_24h: number
   market_cap_change_24h: number
   market_cap_change_percentage_24h: number
   circulating_supply: number
   total_supply: number
   max_supply: number
   ath: number
   ath_change_percentage: number
   ath_date: string
   atl: number
   atl_change_percentage: number
   atl_date: string
   roi: null
}
