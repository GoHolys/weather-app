import { WeatherResponse } from "../App";

interface WeatherCardProps {
  data?: WeatherResponse | null;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  if (!data) {
    return null;
  }
  

  return (
    <div className="flex flex-col justify-between max-w-[500px] m-auto p-4 text-white gap-20">
      <div className="flex justify-between pt-12 items-center">
        <div className="flex flex-col items-center ">
          <img
            src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            alt="logo"
          />
          <p className="text-2xl text-black">{data?.weather[0].main}</p>
        </div>
        <p className="text-9xl text-black">
          {data?.main.temp.toFixed(0)}&#176;
        </p>
      </div>
      <div className="bg-blue-500  p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data?.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data?.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data?.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data?.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
