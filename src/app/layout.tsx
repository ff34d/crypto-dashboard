import { Auth0Provider } from "@auth0/nextjs-auth0/client"
import { cn } from "@shared/ui/shadcn/lib/utils"
import { SidebarProvider } from "@shared/ui/shadcn/ui/sidebar"
import { SidebarWidget } from "@widgets/SidebarWidget"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-serif" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
   title: "Crypto 👺",
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
         className={cn("font-sans", geistMono.variable, geist.variable, "dark")}>
         <body>
            <Auth0Provider>
               <SidebarProvider>
                  <SidebarWidget />
                  <Toaster />
                  <main className="w-full p-4">{children}</main>
               </SidebarProvider>
            </Auth0Provider>
         </body>
      </html>
   )
}
