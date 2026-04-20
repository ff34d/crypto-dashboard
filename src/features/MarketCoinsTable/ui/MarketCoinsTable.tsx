"use client"

import type { ICoinByMarketsDTO } from "@entities/Coin"
import { CoinChip, CoinPercentageChip } from "@entities/Coin"
import { CURRENCY_CHAR } from "@shared/configs"
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@shared/ui/shadcn/ui/pagination"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@shared/ui/shadcn/ui/table"
import { useSearchParams } from "next/navigation"

interface Props {
   pagesCount: number
   coinsByMarkets: ICoinByMarketsDTO[]
}

export function MarketCoinsTable({ pagesCount, coinsByMarkets }: Props) {
   return (
      <div>
         <MarketCoinsTableTable coinsByMarkets={coinsByMarkets} />
         <MarketCoinsTablePagination pagesCount={pagesCount} />
      </div>
   )
}

// ========== Table ==========
function MarketCoinsTableTable({ coinsByMarkets }: Pick<Props, "coinsByMarkets">) {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead>#</TableHead>
               <TableHead>Coin</TableHead>
               <TableHead>Price</TableHead>
               <TableHead>Low 24h</TableHead>
               <TableHead>High 24h</TableHead>
               <TableHead>Change 24h</TableHead>
               <TableHead>Total volume</TableHead>
               <TableHead>Market cap 24h</TableHead>
            </TableRow>
         </TableHeader>

         <TableBody>
            {coinsByMarkets?.map((v) => {
               return (
                  <TableRow key={v.id}>
                     <TableCell>{v.market_cap_rank}</TableCell>

                     <TableCell>
                        <CoinChip
                           image={v.image}
                           name={v.name}
                           symbol={v.symbol}
                        />
                     </TableCell>

                     <TableCell>
                        {v.current_price} {CURRENCY_CHAR}
                     </TableCell>

                     <TableCell>
                        <CoinPercentageChip number={v.price_change_percentage_24h} />
                     </TableCell>

                     <TableCell>
                        {v.low_24h} {CURRENCY_CHAR}
                     </TableCell>

                     <TableCell>
                        {v.high_24h} {CURRENCY_CHAR}
                     </TableCell>

                     <TableCell>
                        {v.total_volume} {CURRENCY_CHAR}
                     </TableCell>

                     <TableCell>
                        {v.market_cap_change_24h} {CURRENCY_CHAR}
                     </TableCell>
                  </TableRow>
               )
            })}
         </TableBody>
      </Table>
   )
}

// ========== Pagination ==========
function MarketCoinsTablePagination({ pagesCount }: Pick<Props, "pagesCount">) {
   const params = useSearchParams()
   const page = Number(params.get("page")) || 1

   return (
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
   )
}
