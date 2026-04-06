import { Routes } from "@shared/configs"
import { Button } from "@shared/ui/shadcn/ui/button"
import Link from "next/link"

export const LogoutButton: React.FC = () => {
   return (
      <Link href={Routes.OAUTH_LOGOUT}>
         <Button>Logout</Button>
      </Link>
   )
}
