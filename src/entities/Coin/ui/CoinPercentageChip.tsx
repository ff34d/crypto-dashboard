interface Props {
   number: number
}

export function CoinPercentageChip({ number }: Props) {
   const isDown = number <= 0
   return (
      <div
         className="flex gap-1 items-center"
         style={{ color: isDown ? "red" : "green" }}>
         <span
            className="text-[0.5rem]"
            style={{ rotate: isDown ? undefined : "180deg" }}>
            &#9660;
         </span>
         {String((number || 0)?.toFixed(2)).replace("-", "")}%
      </div>
   )
}
