export class Repository {
   readonly #KEY: string

   constructor(key: string) {
      this.#KEY = key
   }

   protected get<T>(): T | undefined {
      const m = this.#getFromStore(this.#KEY)
      if (!m) return undefined
      return this.#serialize<T>(m)
   }

   protected set<T>(data: T): void {
      this.#setToStore(this.#KEY, data)
   }

   protected push<T>(data: T): void {
      const prev = this.get<T[]>()
      this.set(prev ? [...prev, data] : [data])
   }

   #getFromStore(key: string): string | undefined | null {
      return globalThis.localStorage.getItem(key)
   }

   #setToStore<T>(key: string, data: T): void {
      return globalThis.localStorage.setItem(key, this.#toString(data))
   }

   #serialize<T>(value: string): T | undefined {
      return JSON.parse(value)
   }

   #toString<T>(data: T): string {
      return JSON.stringify(data)
   }
}
