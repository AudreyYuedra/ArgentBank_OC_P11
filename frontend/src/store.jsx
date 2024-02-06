import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./api/auth/authSlice"
import userProfileReducer from "./api/userProfile/userProfileSlice"

export const store = configureStore({
   reducer: {
      auth: authReducer,
      user: userProfileReducer,
   },
})
