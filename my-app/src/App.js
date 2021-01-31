import React, { useState, useEffect } from "react";
import { Container, Button } from "bootstrap-4-react";
import axios from "axios";

export default () => {

  // This function will load a request from the jokes API and show it to the user when he clicks on the  button.

  const [joke, setJoke] = useState("");
  const getJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setJoke(response.data.joke);
      });
  };

  // The Weather information API will be displayed in the beginning

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

  // Set Background Image
  const backgroundImg = {
    background:
      "url('https://i.postimg.cc/Twhcyp8B/pexels-helena-lopes-708440.jpg') no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    minHeight: "100vh",
  };

  return (
    // Set the background image, title, joke space and next joke button.

    <div style={backgroundImg}>

      <Container>
        <h1 className="text-center text-info">Web D'Acudits</h1>
        
    
    {/* Add the weather information  */}
        <div className=" text-left">
          {getWeather.main && (
            <div>
              <h5>{getWeather.name}</h5>
              {getWeather.main.temp} º C
              <p>{getWeather.weather[0].description} </p>
            </div>
          )}
        </div>

        <Container
          className="w-50 h-25"
          bg="light"
          text="center"
          mx="auto"align="centered">

          <h4 className=" text-center mb-3"> Preparat per riure? &#129315;</h4>

          <div className="text-center my-2"> {joke} </div>

          <Button
            info
            as="input"
            type="submit"
            value="Següent acudit"
            mt="4"
            align="centered"
            onClick={getJoke}>

            </Button>
        </Container>
      </Container>
    </div>
  );
};
