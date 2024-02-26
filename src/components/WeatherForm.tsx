import axios from "axios";
import { useState } from "react";
import { WeatherResponse } from "../App";

// const searchCityData = (e) => {
//   axios.get(url).then((res) => setData(res.data));
// };

// useEffect(() => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
//   axios.get(url).then((res) => setData(res.data));
// }, [city]);

const API_KEY = "c49de5ffc958d288525e011ebeb99f51";

interface WeatherFormProps {
  setData: React.Dispatch<React.SetStateAction<WeatherResponse | null>>;
}

export default function WeatherForm({ setData }: WeatherFormProps) {
  const [city, setCity] = useState("London");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5 w-full justify-center">
        <label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={city}
              onChange={handleChange}
              className="border border-gray-400 py-1 px-2 w-80"
              placeholder="Enter a city name"
            />
          </div>
        </label>
        <input
          type="submit"
          value="Submit"
          className=" bg-blue-500 text-white rounded px-5 cursor-pointer"
        />
      </div>
    </form>
  );
}
