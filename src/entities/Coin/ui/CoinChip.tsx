import Image from "next/image"

interface Props {
   name: string
   image?: string
   symbol?: string
}

export const CoinChip: React.FC<Props> = ({ name, image, symbol }) => {
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
      </div>
   )
}
