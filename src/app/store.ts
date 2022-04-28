import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import asyncDataUpdaterReducer from "../features/asyncDataUpdater/asyncDataUpdaterSlice";

export const store = configureStore({
  reducer: {
    dataUpdater: asyncDataUpdaterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
