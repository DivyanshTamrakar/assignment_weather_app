import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCurrenWeather,
  fetchCurrentAirPollution,
  fetchCurrentUVIndex,
} from "./thunk";
import { AirQualityResponse, WeatherData } from "./types";

interface initialStateType {
  myLocationData: WeatherData | null; // You can replace `any[]` with the actual type of myLocationData
  myUVIndex: any; // You can replace `any[]` with the actual type of myLocationData
  myAirQuality: AirQualityResponse | null; // You can replace `any[]` with the actual type of myLocationData
  loading: boolean;
  error: any; // You can replace `any` with the actual type of error
}

const initialState: initialStateType = {
  myLocationData: null,
  myUVIndex: null,
  myAirQuality: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "myLocation",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Reducers for fetchCurrenWeather
      .addCase(fetchCurrenWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrenWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.myLocationData = action.payload;
      })
      .addCase(fetchCurrenWeather.rejected, (state, action) => {
        state.loading = false;
      })
      // Reducers for fetchCurrentAirPollution
      .addCase(fetchCurrentAirPollution.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentAirPollution.fulfilled, (state, action) => {
        state.loading = false;
        state.myAirQuality = action.payload;
      })
      .addCase(fetchCurrentAirPollution.rejected, (state, action) => {
        state.loading = false;
      })
      // Reducers for fetchCurrentUVIndex
      .addCase(fetchCurrentUVIndex.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUVIndex.fulfilled, (state, action) => {
        state.loading = false;
        state.myUVIndex = action.payload;
      })
      .addCase(fetchCurrentUVIndex.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
