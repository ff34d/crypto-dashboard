"use client"

import type { ICoin, ICoinByMarketsDTO } from "@entities/Coin"
import { CoinPercentageChip, coinStarredRepository } from "@entities/Coin"
import { CoinChip, CoinChipStar } from "@entities/Coin/ui/CoinChip"
import { CURRENCY_CHAR } from "@shared/configs"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@shared/ui/shadcn/ui/table"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

interface Props {
   coins: ICoinByMarketsDTO[]
   queryKeyStarred: string
}

type StarRepoState = ReturnType<typeof coinStarredRepository.getAll>

export function CoinsTable({ coins, queryKeyStarred }: Props) {
   const [starRepo, setStarRepo] = useState<StarRepoState>()
   const params = useSearchParams()

   const tableData = useMemo(() => {
      const data = [...coins]

      if (params.get(queryKeyStarred) && starRepo?.length) {
         data.sort(
            (a, b) => Number(starRepo?.includes(b.id)) - Number(starRepo?.includes(a.id)),
         )
      }

      return data
   }, [coins, params, starRepo, queryKeyStarred])

   const handleStarredClick = (id: ICoin["id"]) => {
      if (starRepo?.includes(id)) {
         coinStarredRepository.removeStarredCoinById(id)
      } else {
         coinStarredRepository.addStarredCoinById(id)
      }

      setStarRepo(coinStarredRepository.getAll())
   }

   useEffect(() => {
      // eslint-disable-next-line
      setStarRepo(coinStarredRepository.getAll())
   }, [])

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
            {tableData?.map((v) => {
               return (
                  <TableRow key={v.id}>
                     <TableCell>{v.market_cap_rank}</TableCell>

                     <TableCell>
                        <CoinChip
                           image={v.image}
                           name={v.name}
                           symbol={v.symbol}>
                           <CoinChipStar
                              onClick={() => handleStarredClick(v.id)}
                              isActive={starRepo?.includes(v.id)}
                           />
                        </CoinChip>
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
