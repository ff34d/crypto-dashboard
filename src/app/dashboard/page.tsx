import { coinService } from "@entities/Coin"
import { Separator } from "@shared/ui/shadcn/ui/separator"
import { Skeleton } from "@shared/ui/shadcn/ui/skeleton"
import { Dashboard } from "@widgets/Dashboard"
import { Suspense } from "react"

interface Props {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const COINS_MARKETS_PEER_PAGE = 10

export default async function DashboardPage({ searchParams }: Props) {
   return (
      <div>
         <h1 className="text-3xl">Dashboard</h1>
         <Separator className="my-4" />

         <Suspense
            key={JSON.stringify(await searchParams)}
            fallback={<Skeleton className="w-full h-80" />}>
            <DashboardPageCoinsMarketsTable searchParams={searchParams} />
         </Suspense>
      </div>
   )
}

async function DashboardPageCoinsMarketsTable({ searchParams }: Props) {
   const { page } = await searchParams
   const currentPage = Number(page) || 1
   const coinsList = await coinService.getCoinsListMapCached()
   const pagesCount = Math.round(coinsList.length / COINS_MARKETS_PEER_PAGE) - 1

   const coinsMarkets = await coinService.getCoinsMarkets(
      COINS_MARKETS_PEER_PAGE,
      currentPage,
   )

   return (
      <Dashboard
         pagesCount={pagesCount}
         coinsByMarkets={coinsMarkets.data}
      />
   )
}
