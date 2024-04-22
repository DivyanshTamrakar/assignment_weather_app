import WeeklyDataCard from "@/components/weeklyDataCard";
import { TiWeatherPartlySunny } from "react-icons/ti";

const WeeklyData = () => {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="flex gap-2">
      {day.map((item) => {
        return <WeeklyDataCard key={item} day={item} />;
      })}
    </div>
  );
};

export default WeeklyData;
