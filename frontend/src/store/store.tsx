import { configureStore } from "@reduxjs/toolkit"
import user from "./modules/user"

export const store = configureStore({
  reducer: {
    user: user,
  },
})


// 스토어 자체에서 RootState, AppDispatch 타입 추론
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch