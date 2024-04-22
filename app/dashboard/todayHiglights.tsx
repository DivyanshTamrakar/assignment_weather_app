import DetailsCard from "@/components/detailsCard";
import { WeatherData } from "@/redux/types";
import { convertUnixToAMPM } from "@/utils/helpers";
import {
  IoArrowDownCircle,
  IoArrowUpCircle,
  IoLocationSharp,
} from "react-icons/io5";
import { SemiCircleProgress } from "react-semicircle-progressbar";

const TodayHighlights = ({
  currentData,
  airQualityIndex,
}: {
  currentData: WeatherData | null;
  airQualityIndex: number | undefined;
}) => {
  return (
    <div className="flex flex-wrap gap-x-8 mt-6">
      <DetailsCard title={"UV Index"}>
        {airQualityIndex && (
          <div>
            <SemiCircleProgress
              percentage={airQualityIndex * 10}
              size={{
                width: 150,
                height: 140,
              }}
              strokeWidth={10}
              strokeColor="#FAC80A"
              strokeLinecap="butt"
              hasBackground={true}
            />
          </div>
        )}
      </DetailsCard>
      <DetailsCard title={"Wind Status"}>
        {currentData?.wind.speed && (
          <div className="flex">
            <h1 className="text-6xl text-black">
              {(currentData.wind.speed * 3.6).toFixed(2)}
            </h1>
            <div className="text-xl text-black self-end mb-1 ml-1">km/h</div>
          </div>
        )}
        <div className="text-black ml-2 flex items-center">
          <IoLocationSharp />
          <span className="ml-2">WSW</span>
        </div>
      </DetailsCard>
      <DetailsCard title={"Sunrise & Sunset"}>
        {currentData?.sys.sunrise && (
          <div className="flex flex-col justify-start items-start gap-4 mb-4">
            <h1 className="text-black flex justify-center gap-4">
              <span>
                <IoArrowUpCircle className="text-yellow-400 size-10" />
              </span>
              <span className="text-xl">
                {convertUnixToAMPM(currentData.sys.sunrise)}
              </span>
            </h1>
            <h1 className="text-black flex justify-center gap-4">
              <span>
                <IoArrowDownCircle className="text-yellow-400 size-10" />
              </span>
              <span className="text-xl">
                {convertUnixToAMPM(currentData.sys.sunset)}
              </span>
            </h1>
          </div>
        )}
      </DetailsCard>
      <DetailsCard title={"Humidity"}>
        {currentData?.main.humidity && (
          <div className="flex">
            <h1 className="text-6xl text-black">{currentData.main.humidity}</h1>
            <div className="text-xl text-black self-start mb-1 ml-1">%</div>
          </div>
        )}
        <div className="text-black ">Normal 🤙🏻</div>
      </DetailsCard>
      <DetailsCard title={"Visibility"}>
        {currentData?.visibility && (
          <div className="flex">
            <h1 className="text-6xl text-black">
              {currentData.visibility / 1000}
            </h1>
            <div className="text-xl text-black self-end mb-1 ml-1">km</div>
          </div>
        )}
        <div className="text-black ">Average 🙁</div>
      </DetailsCard>
      <DetailsCard title={"Air Quality"}>
        {airQualityIndex && (
          <div className="flex">
            <h1 className="text-6xl text-black">{airQualityIndex}</h1>
          </div>
        )}
        <div className="text-black ">Unhealthy 👎🏻</div>
      </DetailsCard>
    </div>
  );
};

export default TodayHighlights;
