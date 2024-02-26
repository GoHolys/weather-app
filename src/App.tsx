import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

function App() {
  const [data, setData] = useState<WeatherResponse | null>(null);

  return (
    <div className="mt-10">
      <WeatherForm setData={setData} />
      <WeatherCard data={data} />
    </div>
  );
}

export default App;
