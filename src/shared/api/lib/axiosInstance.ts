import axios from "axios"

export const axiosInstance = axios.create({
   baseURL: process.env.COIN_GECKO_API_URL,
   headers: {
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY,
   },
})

// ==============================
//  CAUTION ⚠️
// ==============================
// Next block is going to be deleted in building.
// Need for mocking in development env.
if (
   process.env.NODE_ENV === "development" &&
   process.env.NEXT_PUBLIC_API_MOCKED === "true"
) {
   // eslint-disable-next-line
   const { apiMockService } = require("@shared/api/_mocks/apiMockService")
   apiMockService(axiosInstance)
}
// ========== END ⚠️ ==========
