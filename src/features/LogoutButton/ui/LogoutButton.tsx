"use client"

import { useUserStore } from "@entities/User"
import { Button } from "@shared/ui/shadcn/ui/button"
import { Spinner } from "@shared/ui/shadcn/ui/spinner"
import { useState } from "react"

export const LogoutButton: React.FC = () => {
   const handleLogout = useUserStore((s) => s.logout)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const onButtonClick = async () => {
      setIsLoading(true)
      await handleLogout()
      setIsLoading(false)
   }

   return (
      <Button
         onClick={onButtonClick}
         disabled={isLoading}>
         {isLoading && <Spinner data-icon="inline-start" />}
         Logout
      </Button>
   )
}
