/**
 * DTO interface for coin market by coins tables.
 */
export interface ICoinByMarketsDTO {
   id: string
   market_cap_rank: number
   image: string
   symbol: string
   name: string
   current_price: string
   low_24h: string
   high_24h: string
   price_change_percentage_24h: number
   total_volume: string
   market_cap_change_24h: string
}
