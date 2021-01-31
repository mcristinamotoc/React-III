import React, { Component } from "react";
import App from "../App";
import { Jumbotron, Button } from "bootstrap-4-react";

// Create this new welcome component and make it show by default. We used conditional rendering.

class Welcome extends Component {
  state = {
    isAccessible: false,
  };

  render() {
    if (this.state.isAccessible == true) {
      return (
        <div>
          <App />
        </div>
      );
    }

    const welcomePage = this.state.isAccessible ? (
      <App />
    ) : (
      <div>
        <h1 className="text-center text-info"> Welcome</h1>
      </div>
    );

    // This welcome component have an access button, when clicked, accesses the jokes page.

    return (
      <Jumbotron
        className="w-50 h-50"
        bg="light"
        text="center"
        my="4"
        mx="auto"
        align="centered">
        
        {welcomePage}

        <Button
          info
          as="input"
          type="submit"
          value="Enter"
          mt="4"
          align="centered"
          onClick={() => {
            this.setState({ isAccessible: !this.state.isAccessible });
          }}>

        </Button>
      </Jumbotron>
    );
  }
}

export default Welcome;
