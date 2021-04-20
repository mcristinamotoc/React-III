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
  return (
      // Layout and styling the joke container: title, space joke and the button who display the next joke. 
      
    <Container
      className="w-50 h-25"
      bg="light"
      text="center"
      mx="auto"
      align="centered">

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
  );
};
