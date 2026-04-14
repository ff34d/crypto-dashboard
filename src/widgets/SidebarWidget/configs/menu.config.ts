import { Routes } from "@shared/configs"

interface MenuConfigItem {
   to: Routes
   name: string
}

export const menuConfig: MenuConfigItem[] = [
   {
      to: Routes.DASHBOARD,
      name: "Dashboard",
   },
]
