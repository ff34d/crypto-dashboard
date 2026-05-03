import { coinService } from "@entities/Coin"
import { Separator } from "@shared/ui/shadcn/ui/separator"
import { Dashboard } from "@widgets/Dashboard"

interface Props {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const COINS_MARKETS_PEER_PAGE = 20

export default async function DashboardPage({ searchParams }: Props) {
   return (
      <div>
         <h1 className="text-3xl">Dashboard</h1>
         <Separator className="my-4" />
         <DashboardPageCoinsMarketsTable searchParams={searchParams} />
      </div>
   )
}

async function DashboardPageCoinsMarketsTable({ searchParams }: Props) {
   const { page } = await searchParams
   const currentPage = Number(page) || 1
   const coinsList = await coinService.getCoinsListMapCached()
   const pagesCount = Math.round(coinsList.length / COINS_MARKETS_PEER_PAGE) - 1

   const coinsMarketsResponse = await coinService.getCoinsMarkets(
      COINS_MARKETS_PEER_PAGE,
      currentPage,
   )

   return (
      <Dashboard
         pagesCount={pagesCount}
         coinsByMarkets={coinsMarketsResponse.data}
      />
   )
}
