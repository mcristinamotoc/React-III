import React, { useState, useEffect } from "react";
import { Container } from "bootstrap-4-react";
import axios from "axios";

export default () => {
  // The Weather information API will be displayed in the beginning. Use axios and useEffect

  const [getWeather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&units=metric&lang=ca&APPID=e50d99da7c6cb79a777875ea8f0a5b6e"
      )

      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    // Added the weather information: city name, temperature, and weather description. Added Math.round method for temperature. 

    <Container>
      <div className=" text-left">
        {getWeather.main && (
          <div>
            <h5>{getWeather.name}</h5>
            {Math.round(getWeather.main.temp)} º C
            <p>{getWeather.weather[0].description} </p>
          </div>
        )}
      </div>
    </Container>
  );
};
