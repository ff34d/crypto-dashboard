import type { ICoin } from "./ICoin"

export type ICoinByListMap = Pick<ICoin, "id"> &
   Pick<ICoin, "symbol"> &
   Pick<ICoin, "name">
