import axios from "axios";
import { useEffect, useState } from "react";
const api_key = import.meta.env.VITE_SOME_KEY

const Weather = ({ capital }) => {
  const [clima, setClima] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      if (capital && !show) {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`;
          const response = await axios.get(url);
          setClima(response.data);
          setShow(true);
        } catch (error) {
          console.error("Error fetching the weather data:", error);
        }
      }
    };
    fetchWeather();
  }, [capital, show]);

  return (
    <div>
      {show && clima ? (
        <div>
          <h2>Weather in {capital}</h2>
          <p>Temperature: {clima.main.temp} °C</p>
          <p>Wind speed: {clima.wind.speed} m/s</p>
          <img src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} />
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
