import React, { useState} from "react";
import { Container, Jumbotron, Button} from "bootstrap-4-react";
import axios from "axios";



export default () => {
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
    <Container >
      <h1 class="text-center text-info my-3">Web D'Acudits</h1>
      <div class="wheather mx-2" id="wheather"></div>

      <Jumbotron>
        <h3 class=" text-center" my-4>Preparat per riure? &#129315;</h3>

         {joke}

        <Button
          info
          as="input"
          type="submit"
          value="Següent acudit"
          display="flex"
          alignItems="center"
          my="4"
          onClick={getJoke}>
          </Button>
       
      
      </Jumbotron>

    </Container>
  );
};
