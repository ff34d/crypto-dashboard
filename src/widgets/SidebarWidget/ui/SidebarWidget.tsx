import { UserChip } from "@entities/User"
import { LoginOAuthButton } from "@features/LoginOAuthButton"
import { LogoutButton } from "@features/LogoutButton"
import { auth0 } from "@shared/lib/Auth"
import { Button } from "@shared/ui/shadcn/ui/button"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuItem,
} from "@shared/ui/shadcn/ui/sidebar"
import Link from "next/link"
import { menuConfig } from "../configs"

export async function SidebarWidget() {
   const session = await auth0.getSession()

   return (
      <Sidebar>
         <SidebarHeader className="underline text-2xl">Crypto-board</SidebarHeader>

         <SidebarContent>
            <SidebarGroup>
               <SidebarMenu className="flex flex-col gap-1.5">
                  {menuConfig.map((value, index) => (
                     <SidebarMenuItem key={index}>
                        <Button
                           className="w-full justify-start"
                           variant="ghost"
                           disabled={globalThis?.location?.href === value.to}>
                           <Link href={value.to}>{value.name}</Link>
                        </Button>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroup>
         </SidebarContent>

         <SidebarFooter>
            {session?.user ? (
               <UserChip data={session.user}>
                  <LogoutButton />
               </UserChip>
            ) : (
               <LoginOAuthButton />
            )}
         </SidebarFooter>
      </Sidebar>
   )
}
