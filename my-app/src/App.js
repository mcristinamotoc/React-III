import React from "react";
import { Container } from "bootstrap-4-react";
import Jokes from "./components/Jokes";
import Weather from "./components/Weather";

export default () => {

  // Set Background Image
  const backgroundImg = {
    background:
      "url('https://i.postimg.cc/Twhcyp8B/pexels-helena-lopes-708440.jpg') no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    minHeight: "100vh",
  };

  return (
    // Added the background image, title, the Jokes and Weather components

    <div style={backgroundImg}>

      <Container>
        <h1 className="text-center text-info">Web D'Acudits</h1>
        <Weather />
        <Jokes />
      </Container>

    </div>
  );
};
