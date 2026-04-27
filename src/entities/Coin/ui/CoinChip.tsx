import { cn } from "@shared/ui/shadcn/lib/utils"
import { Star } from "lucide-react"
import Image from "next/image"
import type { ReactNode } from "react"

interface CoinChipProps {
   name: string
   image?: string
   symbol?: string
   children?: ReactNode
}

/**
 * Children position after symbol
 */
export const CoinChip: React.FC<CoinChipProps> = ({ name, children, image, symbol }) => {
   return (
      <div className="flex gap-2 items-center">
         {image && (
            <Image
               width={30}
               height={30}
               src={image}
               alt={symbol || "Coin"}
               loading="lazy"
            />
         )}
         <span>{name}</span>
         <span className="opacity-50 text-sm">{symbol}</span>
         {children}
      </div>
   )
}

interface CoinChipStarProps {
   isActive?: boolean
   onClick: VoidFunction
}

export const CoinChipStar: React.FC<CoinChipStarProps> = ({ onClick, isActive }) => {
   return (
      <button
         className="transition-opacity hover:opacity-50"
         style={{ opacity: isActive ? 1 : 0.1 }}
         onClick={onClick}>
         <Star
            className={cn(isActive ? "fill-yellow-500 stroke-yellow-500" : undefined)}
            width={15}
            height={15}
         />
      </button>
   )
}
