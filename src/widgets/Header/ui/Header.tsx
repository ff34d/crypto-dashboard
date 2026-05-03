import { UserChip } from "@entities/User"
import { LoginOAuthButton } from "@features/LoginOAuthButton"
import { LogoutButton } from "@features/LogoutButton"
import { auth0 } from "@shared/lib/Auth"

export async function Header() {
   const session = await auth0.getSession()

   return (
      <header className="sticky top-0 left-0 w-full backdrop-blur-xl bg-white/20 z-10 h-20">
         <div className="flex justify-between items-center gap-1 h-full mx-auto w-full max-w-(--layout-width)">
            <h1 className="underline text-2xl">Crypto-board</h1>

            <div>
               {session?.user ? (
                  <UserChip data={session.user}>
                     <LogoutButton />
                  </UserChip>
               ) : (
                  <LoginOAuthButton />
               )}
            </div>
         </div>
      </header>
   )
}
