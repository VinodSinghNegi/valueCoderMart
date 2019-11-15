import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Intro from "./components/Intro";
import HomePage from "./components/homepage";

class App extends Component {
  state = {
    value: 0,
    isLogin: "error",
    isLogout: "error",
    email: ""
  };

  loginStatus = val => {
    this.setState({ isLogin: val });
  };

  valueStatus = val => {
    this.setState({ value: val });
  };

  logoutStatus = val => {
    this.setState({ isLogout: val });
  };

  getEmail = val => {
    this.setState({ email: val });
  };



  render() {

    if (this.state.value === 0 && this.state.isLogin === "error") {
      return (
        <div>
          <Intro value={this.valueStatus} />
        </div>
      );
    }

    else if (this.state.value === 1 && this.state.isLogin === "error") {
      return (
        <div>
          <Login
            value={this.valueStatus}
            login={this.loginStatus}
            email={this.getEmail}
          />
        </div>
      );
    }

    else if (this.state.value === 2 && this.state.isLogin === "error") {
      return (
        <div>
          <SignUp value={this.valueStatus} />
        </div>
      );
    }

    else if (
      this.state.value === 1 && this.state.isLogin === "success") {
      return (
        <div>
          <HomePage
            email={this.state.email}
            logout={this.logoutStatus}
            login={this.loginStatus}
            value={this.valueStatus}
          />
        </div>
      );
    }

    else if (
      this.state.isLogin === "success" && this.state.isLogout === "success") {
      console.log(this.state);
      return (
        <div>
          <Intro />
        </div>
      );
    }

  }
}

ReactDOM.render(<App />, document.getElementById("root"));
