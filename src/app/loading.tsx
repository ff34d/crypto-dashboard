import { Spinner } from "@shared/ui/shadcn/ui/spinner"

export default function Loading() {
   return (
      <div className="w-full h-screen flex items-center justify-center">
         <Spinner className="w-14 h-14" />
      </div>
   )
}
