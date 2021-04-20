import { Link } from "react-router-dom";
import React, { Component } from "react";
import App from "../App";
import { Jumbotron, Button } from "bootstrap-4-react";

// Create this new welcome component and make it show by default. We used conditional rendering.

export default () => {

  // This welcome component have an access button, when clicked, accesses the jokes page.

  return (
    <Jumbotron
      className="w-50 h-50"
      bg="light"
      text="center"
      my="4"
      mx="auto"
      align="centered">

      <div>
        <h1 className="text-center text-info"> Welcome</h1>
      </div>

       {/* Define the routes of the application and use them in this access button. */}

      <Link to="/HomePage">
        <Button
          info
          as="input"
          type="submit"
          value="Enter"
          mt="4"
          align="centered"
        ></Button>
      </Link>
    </Jumbotron>
  );
};
