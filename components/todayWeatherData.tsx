import { getCurrentDate } from "@/utils/helpers";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiCloudSun } from "react-icons/ci";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import ImageWithTextCentered from "./imageWithText";

const TodayWeatherData = ({
  temp,
  desc,
  main,
}: {
  temp: number | undefined;
  desc: string | undefined;
  main: string | undefined;
}) => {
  return (
    <div>
      <TiWeatherPartlySunny className="size-48 mt-4 text-[#FAC80A]" />
      {temp && (
        <div className="flex">
          <h1 className="text-8xl text-black mt-8 font-extralight">
            {(temp - 273.15).toFixed(0)}
          </h1>
          <div className="text-4xl font-normal text-black mt-8">°C</div>
        </div>
      )}
      <div className="text-black mt-6 ml-2">{getCurrentDate()}</div>
      <div className="border-t border-gray-300 my-4"></div>

      <div className="text-black ml-2 flex items-center mt-4">
        <CiCloudSun className="text-gray-400 size-8" />
        <span className="ml-2">{main}</span>
      </div>
      <div className="text-black ml-2 flex items-center mt-2">
        <FaCloudShowersHeavy className="text-blue-400 size-6" />
        <span className="ml-2">{desc}</span>
      </div>
      <ImageWithTextCentered text="New York, NY, USA" />
    </div>
  );
};

export default TodayWeatherData;
