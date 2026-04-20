declare global {
   namespace NodeJS {
      interface ProcessEnv {
         COIN_GECKO_API_URL: string
         COIN_GECKO_API_KEY: string
      }
   }
}

export {}
