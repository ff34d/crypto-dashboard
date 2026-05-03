import { Auth0Provider } from "@auth0/nextjs-auth0/client"
import { cn } from "@shared/ui/shadcn/lib/utils"
import { Header } from "@widgets/Header/ui"
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
               <Toaster />
               <Header />
               <main className="w-full max-w-(--layout-width) mx-auto py-10">
                  {children}
               </main>
            </Auth0Provider>
         </body>
      </html>
   )
}
