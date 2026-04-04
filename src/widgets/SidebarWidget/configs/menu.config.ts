import { Routes } from "@shared/configs"

interface MenuConfigItem {
   to: Routes
   name: string
}

export const menuConfig: MenuConfigItem[] = [
   {
      to: Routes.MAIN,
      name: "Dashboard",
   },
   {
      to: Routes.SETTINGS,
      name: "Settings",
   },
]
