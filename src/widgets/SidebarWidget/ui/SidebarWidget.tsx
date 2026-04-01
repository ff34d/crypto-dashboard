"use client"

import { UserChip, useUserStore } from "@entities/User"
import { LoginOAuthButton } from "@features/LoginOAuthButton"
import { LogoutButton } from "@features/LogoutButton"
import { Sidebar, SidebarContent, SidebarFooter } from "@shared/ui/shadcn/ui/sidebar"

export function SidebarWidget() {
   const user = useUserStore((s) => s.user)
   const isAuthenticated = useUserStore((s) => s.isAuthorized)

   return (
      <Sidebar>
         <SidebarContent>Menu</SidebarContent>

         <SidebarFooter>
            {isAuthenticated ? (
               <UserChip data={user}>
                  <LogoutButton />
               </UserChip>
            ) : (
               <LoginOAuthButton />
            )}
         </SidebarFooter>
      </Sidebar>
   )
}
