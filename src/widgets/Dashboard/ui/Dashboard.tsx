import { coinService, type ICoinByMarket } from "@entities/Coin"
import { CoinsTable } from "@features/CoinsTable"
import { TablePagination } from "@features/TablePagination"
import { ToggleQuery } from "@features/ToggleQuery"
import { QUERY_KEY_STARRED } from "@shared/configs"
import { Star } from "lucide-react"

interface Props {
   pagesCount: number
   coinsByMarkets: ICoinByMarket[]
}

export const Dashboard: React.FC<Props> = ({ pagesCount, coinsByMarkets }) => {
   if (!coinsByMarkets?.length) return <p>Coins not found</p>

   return (
      <div className="flex flex-col gap-1">
         <ToggleQuery queryKey={QUERY_KEY_STARRED}>
            <Star className="fill-yellow-500 stroke-yellow-500" />
            <span>Starred first</span>
         </ToggleQuery>

         <CoinsTable
            coins={coinService.transformCoinsMarketsToDTO(coinsByMarkets)}
            queryKeyStarred={QUERY_KEY_STARRED}
         />
         <TablePagination pagesCount={pagesCount} />
      </div>
   )
}
