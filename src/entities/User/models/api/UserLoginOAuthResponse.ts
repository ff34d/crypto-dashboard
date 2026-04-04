import { IUser } from "../IUser"

export interface UserLoginOAuthResponse {
   user: IUser
   expires: string
}
