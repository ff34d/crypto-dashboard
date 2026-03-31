import { UserGoogleAuthResponse } from "@shared/_MOCKS"
import { UserLoginOAuthResponse } from "../models"

class UserService {
   async loginByOAuth(): Promise<UserLoginOAuthResponse> {
      await new Promise((res) => setTimeout(res, 1000))
      return UserGoogleAuthResponse
   }

   async logout(): Promise<void> {
      await new Promise((res) => setTimeout(res, 1000))
   }
}

export const userService = new UserService()
