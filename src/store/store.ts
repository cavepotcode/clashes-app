import { configureStore } from "@reduxjs/toolkit";
import { authSlice, tenantsSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    tenants: tenantsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
