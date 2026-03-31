import { UserAuthorizedChip } from "@features/UserAuthorizedChip/ui"
import { Sidebar, SidebarHeader } from "@shared/ui/shadcn/ui/sidebar"
import React from "react"

export function SidebarWidget() {
   return (
      <Sidebar
         style={
            {
               "--sidebar-width": "20rem",
            } as React.CSSProperties
         }>
         <SidebarHeader>
            <UserAuthorizedChip />
         </SidebarHeader>
      </Sidebar>
   )
}
