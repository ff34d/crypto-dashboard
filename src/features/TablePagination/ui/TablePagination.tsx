"use client"

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
}

export function TablePagination({ pagesCount }: Props) {
   const params = useSearchParams()
   const page = Number(params.get("page")) || 1

   const createPageUrl = (pageNumber: number) => {
      const currentParams = new URLSearchParams(params.toString())
      currentParams.set("page", pageNumber.toString())
      return `?${currentParams.toString()}`
   }

   return (
      <Pagination>
         <PaginationContent>
            <PaginationItem>
               <PaginationPrevious
                  href={page > 1 ? createPageUrl(page - 1) : "#"}
                  aria-disabled={page === 1}
                  className={page === 1 ? "pointer-events-none opacity-50" : ""}
               />
            </PaginationItem>

            {Array.from({ length: pagesCount }, (_, i) => i + 1).map((i) => (
               <PaginationItem key={i}>
                  <PaginationLink
                     href={createPageUrl(i)}
                     isActive={i === page}>
                     {i}
                  </PaginationLink>
               </PaginationItem>
            ))}

            <PaginationItem>
               <PaginationNext
                  href={page < pagesCount ? createPageUrl(page + 1) : "#"}
                  aria-disabled={page === pagesCount}
                  className={page === pagesCount ? "pointer-events-none opacity-50" : ""}
               />
            </PaginationItem>
         </PaginationContent>
      </Pagination>
   )
}
