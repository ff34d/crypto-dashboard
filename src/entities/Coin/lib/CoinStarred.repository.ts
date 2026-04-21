"use client"

import { Repository } from "@shared/lib"
import { toast } from "sonner"
import type { ICoin } from "../models"

class CoinStarredRepository extends Repository {
   getAll() {
      return this.get<ICoin["id"][] | undefined>()
   }

   addStarredCoinById(id: ICoin["id"]) {
      this.push(id)
      toast.success("Coin starred")
   }

   removeStarredCoinById(id: ICoin["id"]) {
      const state = this.get<ICoin["id"][]>()

      if (!state || !Array.isArray(state)) {
         return toast.error(`Removed error by coin: ${id}`)
      }

      this.set(state.filter((v) => v !== id))
      toast.success("Coin removed")
   }

   getStarredCoinById(id: ICoin["id"]) {
      const state = this.get<ICoin["id"][]>()
      if (!state || !Array.isArray(state)) return
      return state.find((v) => v === id)
   }
}

export const coinStarredRepository = new CoinStarredRepository("starred_coins")
