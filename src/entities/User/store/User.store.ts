import { create } from "zustand"
import { userService } from "../api"
import { IUser } from "../models"

interface UserStore {
   user: IUser | undefined
   isAuthorized: boolean
   loginByOAuth: () => Promise<void>
   logout: () => Promise<void>
   setUser: (user: IUser) => Promise<void>
}

export const useUserStore = create<UserStore>((set) => ({
   user: undefined,
   isAuthorized: false,
   loginByOAuth: async () => {
      await userService.loginByOAuth()
   },
   logout: async () => {
      await userService.logout()
      set({ user: undefined, isAuthorized: false })
   },
   setUser: async (user) => {
      set({ user, isAuthorized: true })
   },
}))
