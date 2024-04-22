import { WeatherData } from "@/redux/types";

export default function DetailsCard({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white my-4 w-3/12 min-h-[200px] shadow-md rounded-2xl py-4 pl-8 flex flex-col justify-between">
      <h1 className="text-gray-400 text-md">{title}</h1>
      {children}
    </div>
  );
}
