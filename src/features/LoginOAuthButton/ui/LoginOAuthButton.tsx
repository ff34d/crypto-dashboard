import { Routes } from "@shared/configs"
import googleIcon from "@shared/icons/google.svg"
import { Button } from "@shared/ui/shadcn/ui/button"
import Image from "next/image"
import Link from "next/link"

export const LoginOAuthButton: React.FC = () => {
   return (
      <Link href={Routes.OAUTH_LOGIN}>
         <Button
            variant="secondary"
            className="w-full">
            Login by
            <Image
               width={16}
               height={16}
               src={googleIcon}
               alt="Google"
            />
         </Button>
      </Link>
   )
}
