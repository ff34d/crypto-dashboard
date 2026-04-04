export class ApiError extends Error {
   constructor(message: string, code: number | string) {
      super(`message: ${message}, code: ${code}`)
      this.name = "ApiError"
      Object.setPrototypeOf(this, ApiError.prototype)
   }
}
