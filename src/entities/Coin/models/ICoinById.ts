import type { ICoin } from "./ICoin"

/**
 * Coin by id, with its details, market data, and other details.
 *
 * @see {@link https://docs.coingecko.com/reference/coins-id|Coingecko docs, get coin by id}
 */
export interface ICoinById extends Omit<ICoin, "image"> {
   preview_listing: boolean
   web_slug: string
   country_origin: string
   genesis_date: string
   hashing_algorithm: string
   categories: string[]
   public_notice: string | null
   asset_platform_id: string | null
   block_time_in_minutes: number
   sentiment_votes_up_percentage: number
   sentiment_votes_down_percentage: number
   watchlist_portfolio_users: number
   status_updates: unknown[]
   additional_notices: unknown[]
   description: { en: string } // Prevent, no localization
   market_data: ICoinByIdMarketData
   links: ICoinByIdLinks
   image: ICoinByIdImage
}

export interface ICoinByIdImage {
   thumb: string
   small: string
   large: string
}

export interface ICoinByIdLinks {
   homepage: string[]
   whitepaper: string
   blockchain_site: string[]
   official_forum_url: string[]
   chat_url: string[]
   announcement_url: string[]
   snapshot_url: string | null
   twitter_screen_name: string
   facebook_username: string
   bitcointalk_thread_identifier: string | null
   telegram_channel_identifier: string
   subreddit_url: string
   repos_url: {
      github: string[]
      bitbucket: unknown[]
   }
}

export interface ICoinByIdMarketData {
   current_price: Record<string, number>
   total_value_locked: null
   mcap_to_tvl_ratio: null
   fdv_to_tvl_ratio: null
   roi: null
   ath: Record<string, number>
   ath_change_percentage: Record<string, number>
   ath_date: Record<string, string>
   atl: Record<string, number>
   atl_change_percentage: Record<string, number>
   atl_date: Record<string, string>
   market_cap: Record<string, number>
   market_cap_rank: number
   outstanding_token_value_usd: null
   market_cap_rank_with_rehypothecated: number
   fully_diluted_valuation: Record<string, number>
   market_cap_fdv_ratio: number
   total_volume: Record<string, number>
   high_24h: Record<string, number>
   low_24h: Record<string, number>
   price_change_24h: number
   price_change_percentage_24h: number
   price_change_percentage_7d: number
   price_change_percentage_14d: number
   price_change_percentage_30d: number
   price_change_percentage_60d: number
   price_change_percentage_200d: number
   price_change_percentage_1y: number
   market_cap_change_24h: number
   market_cap_change_percentage_24h: number
   price_change_24h_in_currency: Record<string, number>
   price_change_percentage_1h_in_currency: Record<string, number>
   price_change_percentage_24h_in_currency: Record<string, number>
   price_change_percentage_7d_in_currency: Record<string, number>
   price_change_percentage_14d_in_currency: Record<string, number>
   price_change_percentage_30d_in_currency: Record<string, number>
   price_change_percentage_60d_in_currency: Record<string, number>
   price_change_percentage_200d_in_currency: Record<string, number>
   price_change_percentage_1y_in_currency: Record<string, number>
   market_cap_change_24h_in_currency: Record<string, number>
   market_cap_change_percentage_24h_in_currency: Record<string, number>
   total_supply: number
   max_supply: number
   circulating_supply: number
   outstanding_supply: number
   last_updated: string
}
