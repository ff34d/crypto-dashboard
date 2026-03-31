import { cn } from "@shared/ui/shadcn/lib/utils"
import { SidebarProvider } from "@shared/ui/shadcn/ui/sidebar"
import { SidebarWidget } from "@widgets/SidebarWidget"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
   title: "Crypto",
   description: "Dashboard by crypto coins on Next.js",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html
         lang="en"
         className={cn("font-sans", geist.variable, "dark")}>
         <body>
            <SidebarProvider>
               <SidebarWidget />
               <main>{children}</main>
            </SidebarProvider>
         </body>
      </html>
   )
}
