"use client"

import type { ICoinByMarket } from "@entities/Coin"
import { CoinTable } from "@entities/Coin"
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@shared/ui/shadcn/ui/pagination"
import { useSearchParams } from "next/navigation"

interface Props {
   pagesCount: number
   coinsByMarkets: ICoinByMarket[]
}

export const MarketCoinsTable: React.FC<Props> = ({ pagesCount, coinsByMarkets }) => {
   const params = useSearchParams()
   const page = Number(params.get("page")) || 1

   return (
      <div>
         <CoinTable data={coinsByMarkets} />

         <Pagination>
            <PaginationContent>
               <PaginationItem>
                  <PaginationPrevious
                     href={`?page=${page - 1}`}
                     disabled={page === 1}
                  />
               </PaginationItem>

               {Array.from({ length: pagesCount }, (_, i) => i + 1).map((i) => {
                  return (
                     <PaginationItem key={i}>
                        <PaginationLink
                           href={`?page=${i}`}
                           isActive={i === page}>
                           {i}
                        </PaginationLink>
                     </PaginationItem>
                  )
               })}

               <PaginationItem>
                  <PaginationNext
                     href={`?page=${page + 1}`}
                     disabled={page === pagesCount}
                  />
               </PaginationItem>
            </PaginationContent>
         </Pagination>
      </div>
   )
}
