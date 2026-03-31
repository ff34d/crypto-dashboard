import { create } from "zustand"
import { userService } from "../api"
import { IUser } from "../models"

interface UserStore {
   user: IUser | undefined
   isAuthenticated: boolean
   loginByOAuth: () => Promise<void>
   logout: () => Promise<void>
}

export const useUserStore = create<UserStore>((set) => ({
   user: undefined,
   isAuthenticated: false,
   loginByOAuth: async () => {
      const res = await userService.loginByOAuth()
      return set({ user: res.user, isAuthenticated: true })
   },
   logout: async () => {
      await userService.logout()
      return set({ user: undefined, isAuthenticated: false })
   },
}))
