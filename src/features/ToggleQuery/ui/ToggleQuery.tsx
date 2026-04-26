"use client"

import { Toggle } from "@shared/ui/shadcn/ui/toggle"
import { useRouter, useSearchParams } from "next/navigation"

interface Props {
   children: React.ReactNode
   queryKey: string
}

export function ToggleQuery({ children, queryKey }: Props) {
   const params = useSearchParams()
   const router = useRouter()

   const handleClick = () => {
      const currentParams = new URLSearchParams(params.toString())

      if (currentParams.has(queryKey)) {
         currentParams.delete(queryKey)
      } else {
         currentParams.set(queryKey, "true")
      }

      const search = currentParams.toString()
      const query = search ? `?${search}` : ""

      router.push(query)
   }

   return (
      <Toggle
         className="w-min"
         size="sm"
         variant="outline"
         pressed={params.has(queryKey)}
         onClick={handleClick}>
         {children}
      </Toggle>
   )
}
