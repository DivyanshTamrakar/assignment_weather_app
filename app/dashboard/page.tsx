"use client";

import SearchBox from "./searchBox";
import { useEffect, useState } from "react";
import { fetchCurrenWeather, fetchCurrentAirPollution } from "@/redux/thunk";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import TodayWeatherData from "@/components/todayWeatherData";
import TodayHighlights from "./todayHiglights";
import WeeklyData from "./weeklyData";

export default function DashBoard() {
  const dispatch = useDispatch();

  const currentData = useAppSelector(
    (state) => state.currentLocation.myLocationData
  );
  const currentAirPolltionData = useAppSelector(
    (state) => state.currentLocation.myAirQuality
  );

  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });

  const getMyLocation = () => {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location) {
      location.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        setPosition({ latitude: latitude, longitude: longitude });
      });
    }
  };

  useEffect(() => {
    if (!position.latitude && !position.longitude) {
      getMyLocation();
    }
    if (position.latitude && position.longitude) {
      dispatch(
        fetchCurrenWeather({ lat: position.latitude, lon: position.longitude })
      );
      dispatch(
        fetchCurrentAirPollution({
          lat: position.latitude,
          lon: position.longitude,
        })
      );
    }
  }, [dispatch, position]);

  return (
    <main className="flex  h-auto flex-row ">
      {/* SideNavBar */}
      <div className="bg-white h-auto w-3/12 px-8 pt-10">
        <SearchBox />
        <TodayWeatherData
          temp={currentData?.main.temp}
          main={currentData?.weather[0].main}
          desc={currentData?.weather[0].description}
        />
      </div>
      {/* body */}
      <div className="bg-gray-200 w-full h-auto pt-10 pl-28">
        <WeeklyData />
        <div className="font-bold text-black text-2xl mt-6">
          {`Today's Highlight`}
        </div>
        <TodayHighlights
          currentData={currentData}
          airQualityIndex={currentAirPolltionData?.list[0].main.aqi}
        />
      </div>
    </main>
  );
}
