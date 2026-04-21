"use client"

import { Repository } from "@shared/lib"
import type { ICoin } from "../models"

class CoinStarredRepository extends Repository {
   getAll() {
      return this.get<ICoin["id"][] | undefined>()
   }

   addStarredCoinById(id: ICoin["id"]) {
      return this.push(id)
   }

   removeStarredCoinById(id: ICoin["id"]) {
      const state = this.get<ICoin["id"][]>()
      if (!state || !Array.isArray(state)) return
      this.set(state.filter((v) => v !== id))
   }

   getStarredCoinById(id: ICoin["id"]) {
      const state = this.get<ICoin["id"][]>()
      if (!state || !Array.isArray(state)) return
      return state.find((v) => v === id)
   }
}

export const coinStarredRepository = new CoinStarredRepository("starred_coins")
