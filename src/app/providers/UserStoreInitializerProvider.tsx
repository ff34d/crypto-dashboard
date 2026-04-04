"use client"

import { IUser, useUserStore } from "@entities/User"
import { useEffect, useRef } from "react"

interface Props {
   user?: IUser
}

export const UserStoreInitializerProvider: React.FC<Props> = ({ user }) => {
   const isInit = useRef(false)
   const setUser = useUserStore((s) => s.setUser)

   useEffect(() => {
      if (!isInit.current && user) {
         setUser(user)
         isInit.current = true
      }
   }, [user, setUser])

   return null
}
