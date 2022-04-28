import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchCount } from "./asyncDataUpdaterAPI";

export interface AsyncDataUpdaterState {
  value: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: AsyncDataUpdaterState = {
  value: [],
  status: "idle",
};

export const getAsyncData = createAsyncThunk(
  "AsyncDataUpdater/fetchData",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const asyncDataUpdaterSlice = createSlice({
  name: "asyncDataUpdater",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAsyncData.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getAsyncData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCount = (state: RootState) => state.dataUpdater.value;

export default asyncDataUpdaterSlice.reducer;
