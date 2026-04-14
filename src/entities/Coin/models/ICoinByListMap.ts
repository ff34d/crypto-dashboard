import type { ICoin } from "./ICoin"

/**
 * Coin by list map response.
 *
 * @see {@link https://docs.coingecko.com/v3.0.1/reference/coins-list |Coingecko docs, get coins markets}
 */
export type ICoinByListMap = Pick<ICoin, "id"> &
   Pick<ICoin, "symbol"> &
   Pick<ICoin, "name">
