import { coinService, type ICoinByMarket } from "@entities/Coin"
import { MarketCoinsTable } from "@features/MarketCoinsTable"

interface Props {
   pagesCount: number
   coinsByMarkets: ICoinByMarket[]
}

export const Dashboard: React.FC<Props> = ({ pagesCount, coinsByMarkets }) => {
   return (
      <div className="flex flex-col gap-1">
         <h2 className="text-xl">Coin markets</h2>

         <MarketCoinsTable
            pagesCount={pagesCount}
            coinsByMarkets={coinService.transformCoinsMarketsToDTO(coinsByMarkets)}
         />
      </div>
   )
}
