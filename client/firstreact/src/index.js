import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Intro from "./components/Intro";
import HomePage from "./components/homepage";

class App extends Component {
  state = { value: 0, responseFromLoginPage: "error" };

  changeResponse = val => {
    this.setState({ responseFromLoginPage: val });
  };

  changeValue = val => {
    this.setState({ value: val });
  };

  render() {
    console.log(this.state);

    if (this.state.value === 0) {
      console.log("value 0");
      return (
        <div>
          <Intro click={this.changeValue} />
        </div>
      );
    } else if (
      this.state.value === 1 &&
      this.state.responseFromLoginPage === "success"
    ) {
      console.log("value 1 and success ");
      return (
        <div>
          <HomePage />
        </div>
      );
    } else if (this.state.value === 1) {
      console.log("value 1");
      return (
        <div>
          <Login click={this.changeValue} pick={this.changeResponse} />
        </div>
      );
    } else if (this.state.value === 2) {
      console.log("value 2");
      return (
        <div>
          <SignUp click={this.changeValue} />
        </div>
      );
    } else if (
      this.state.value === 1 &&
      this.state.responseFromLoginPage === "error"
    ) {
      console.log("value 1 and error ");
      return (
        <div>
          <Login pick={this.changeResponse} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
