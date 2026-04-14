import { unstable_cache } from "next/cache"

export const Mapper = {
   async requestWithCache<T>(
      cb: () => Promise<T>,
      keyPats?: string[],
      options?: { revalidate?: number; tags?: string[] },
   ): Promise<T> {
      return await unstable_cache(cb, keyPats, options)()
   },
}
