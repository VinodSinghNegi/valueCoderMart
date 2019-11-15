import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Axios from "axios";

class SignupPage extends Component {
  state = { username: "", email: "", password: "", responseFromServer: "" };
  onFormSubmit = async prvt => {
    prvt.preventDefault();
    const res = await Axios.post("/signup", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    });
    this.setState({ responseFromServer: res.data });
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow className="rgba-white-light d-flex justify-content-center">
          <MDBCol md="6">
            <MDBBtn color="indigo" onClick={() => { this.props.value(0) }}>
              Back
            </MDBBtn>
            <form onSubmit={this.onFormSubmit}>
              <div>
                <p className="h1 text-center mb-4 orange-text">Sign up</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="black-text"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  required
                  onChange={prvt =>
                    this.setState({ username: prvt.target.value })
                  }
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="black-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  required
                  onChange={prvt => this.setState({ email: prvt.target.value })}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="black-text"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                  required
                  onChange={prvt =>
                    this.setState({ password: prvt.target.value })
                  }
                />
                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">
                    Signup
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

export default SignupPage;
