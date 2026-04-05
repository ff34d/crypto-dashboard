import type { IUser } from "../IUser"

export interface UserLoginOAuthResponse {
   user: IUser
   expires: string
}
