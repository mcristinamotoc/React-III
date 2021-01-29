import React, { useState } from "react";
import { Container, Jumbotron, Button } from "bootstrap-4-react";
import axios from "axios";

export default () => {

  // This function will load a request from the API and show it to the user when he clicks on the  button.
  
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
      <Container my="2">
        <h1 class="text-center text-info my-3">Web D'Acudits</h1>
        <div class="wheather mx-2" id="wheather"></div>

        <Jumbotron
          className="w-50 h-25"
          bg="light"
          text="center"
          mx="auto"
          mb="3">

          <h4 className=" text-center mb-4"> Preparat per riure? &#129315;</h4>

          <div class="text-center" my-3> {joke} </div>

          <Button
            info
            as="input"
            type="submit"
            value="Següent acudit"
            mt="4"
            align="centered"
            onClick={getJoke}>

            </Button>

        </Jumbotron>
      </Container>
    </div>
  );
};
