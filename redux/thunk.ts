import { API_KEY } from "@/constants/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrenWeather = createAsyncThunk(
  "location/myLocation",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchCurrentAirPollution = createAsyncThunk(
  "location/myAirPollution",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchCurrentUVIndex = createAsyncThunk(
  "location/myUVIndex",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
