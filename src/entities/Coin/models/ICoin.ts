/**
 * Base coin interface
 */
export interface ICoin {
   id: string
   symbol: string
   name: string
   market_cap_rank: number
   market_cap_rank_with_rehypothecated: number
   last_updated: string
}
