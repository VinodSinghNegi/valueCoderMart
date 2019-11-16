import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Cookie from 'js-cookie';
import Axios from "axios";
import { Route, Link } from "react-router-dom"
import HomePage from "./homepage"

class LoginPage extends Component {
  state = { email: "", password: "", responseFromServer: "" };
  onFormSubmit = async event => {
    event.preventDefault();
    const res = await Axios.post("/login", {
      email: this.state.email,
      password: this.state.password
    });
    this.setState({ responseFromServer: res.data });
    if (this.state.responseFromServer === "success") {
      this.props.login(this.state.responseFromServer);
      this.props.email(this.state.email);
      Cookie.set("mytoken", this.state.email);
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className="rgba-white-light d-flex justify-content-center ">
          <MDBCol md="6">
            <MDBBtn
              color="indigo"
              onClick={() => {
                this.props.value(0);
              }}
            >
              Back
            </MDBBtn>
            <form onSubmit={this.onFormSubmit}>
              <div >
                <p className="h1 text-center mb-4 orange-text">Login</p>
                <label htmlFor="defaultFormLoginEmailEx" className="black-text">
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  required
                  onChange={event => this.setState({ email: event.target.value })}
                />
                <br />
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                  className="black-text"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                  required
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">
                    Login
                  </MDBBtn>

                </div>
              </div>
            </form>
            <p>{this.state.responseFromServer}</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginPage;
