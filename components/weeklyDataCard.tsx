import { TiWeatherPartlySunny } from "react-icons/ti";

const WeeklyDataCard = ({ day }: { day: string }) => {
  return (
    <div className="bg-white my-4 w-fit min-h-[150px] shadow-md rounded-2xl py-4 px-8 flex flex-col justify-between items-center">
      <h1 className="text-black text-md">{day}</h1>
      <TiWeatherPartlySunny className="size-12 text-[#FAC80A]" />
      <div className="text-xl font-normal text-black">15°</div>
    </div>
  );
};

export default WeeklyDataCard;
