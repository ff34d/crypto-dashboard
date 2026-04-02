"use client"

import { UserChip, useUserStore } from "@entities/User"
import { LoginOAuthButton } from "@features/LoginOAuthButton"
import { LogoutButton } from "@features/LogoutButton"
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
import { usePathname } from "next/navigation"
import { menuConfig } from "../configs"

export function SidebarWidget() {
   const user = useUserStore((s) => s.user)
   const isAuthenticated = useUserStore((s) => s.isAuthorized)
   const pathname = usePathname()

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
                           disabled={pathname === value.to}>
                           <Link href={value.to}>{value.name}</Link>
                        </Button>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroup>
         </SidebarContent>

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
