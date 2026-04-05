import { Auth0Provider } from "@auth0/nextjs-auth0/client"
import { auth0 } from "@shared/lib/Auth"
import { cn } from "@shared/ui/shadcn/lib/utils"
import { SidebarProvider } from "@shared/ui/shadcn/ui/sidebar"
import { SidebarWidget } from "@widgets/SidebarWidget"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { UserStoreInitializerProvider } from "./providers"

const geist = Geist({ subsets: ["latin"], variable: "--font-serif" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
   title: "Crypto 👺",
   description: "Dashboard by crypto coins on Next.js",
}

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   const session = await auth0?.getSession()
   const user = session?.user

   return (
      <html
         lang="en"
         className={cn("font-sans", geistMono.variable, geist.variable, "dark")}>
         <body>
            <Auth0Provider>
               <UserStoreInitializerProvider user={user} />
               <SidebarProvider>
                  <SidebarWidget />
                  <main>{children}</main>
               </SidebarProvider>
            </Auth0Provider>
         </body>
      </html>
   )
}
