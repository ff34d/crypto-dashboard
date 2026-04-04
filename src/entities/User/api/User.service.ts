import { Routes } from "@shared/configs"

class UserService {
   async loginByOAuth(): Promise<void> {
      globalThis.location.href = Routes.OAUTH_LOGIN
   }

   async logout(): Promise<void> {
      globalThis.location.href = Routes.OAUTH_LOGOUT
   }
}

export const userService = new UserService()
