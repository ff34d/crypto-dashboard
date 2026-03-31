"use client"

import { useUserStore } from "@entities/User"
import googleIcon from "@shared/icons/google.svg"
import { Button } from "@shared/ui/shadcn/ui/button"
import { Spinner } from "@shared/ui/shadcn/ui/spinner"
import Image from "next/image"
import React, { useState } from "react"

export const LoginOAuthButton: React.FC = () => {
   const handleLoginByOAuth = useUserStore((s) => s.loginByOAuth)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const onButtonClick = async () => {
      setIsLoading(true)
      await handleLoginByOAuth()
      setIsLoading(false)
   }

   return (
      <Button
         variant="secondary"
         onClick={onButtonClick}
         disabled={isLoading}>
         {isLoading && <Spinner data-icon="inline-start" />}
         Login by
         <Image
            width={16}
            height={16}
            src={googleIcon}
            alt="Google"
         />
      </Button>
   )
}
