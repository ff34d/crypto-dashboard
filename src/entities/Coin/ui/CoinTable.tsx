import type { ICoinByMarket } from "@entities/Coin/models"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@shared/ui/shadcn/ui/table"

interface Props {
   data: ICoinByMarket[]
}

export const CoinTable: React.FC<Props> = ({ data }) => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead>Coin</TableHead>
               <TableHead>Price</TableHead>
            </TableRow>
         </TableHeader>

         <TableBody>
            {data?.map((value) => {
               return (
                  <TableRow key={value.id}>
                     <TableCell>{value.name}</TableCell>
                     <TableCell>{value.price_change_24h}</TableCell>
                  </TableRow>
               )
            })}
         </TableBody>
      </Table>
   )
}
