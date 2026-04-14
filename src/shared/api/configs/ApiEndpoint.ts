/**
 * Api endpoints
 *
 * @see {@link https://docs.coingecko.com/v3.0.1/reference/endpoint-overview|Coingecko docs}
 */
export enum ApiEndpoint {
   // ========== Global ==========
   GET_COINS_MARKETS = "/coins/markets",
   GET_COINS_LIST_MAP = "/coins/list",
   GET_SEARCH = "/search",

   // ========== Coin ==========
   GET_COIN = "/coins/:id",
   GET_COIN_CHART = "/coins/:id/market_chart",
   GET_COIN_PRICE = "/simple/token_price/:id",
}
