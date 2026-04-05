import type { ILogger } from "@shared/models"

export class Logger implements ILogger {
   readonly #CONSOLE
   readonly #SERVICE_NAME: string

   constructor(serviceName: string) {
      this.#CONSOLE = console
      this.#SERVICE_NAME = serviceName
   }

   #createMessage(message: string): string {
      return `[${this.#SERVICE_NAME}]: ${message}`
   }

   log(message: string): void {
      this.#CONSOLE.log(this.#createMessage(message))
   }

   error(message: string): void {
      this.#CONSOLE.error(this.#createMessage(message))
   }
}
