import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Axios from "axios";

class LoginPage extends Component {
  state = { email: "", password: "", responseFromServer: "" };
  onFormSubmit = async prvt => {
    prvt.preventDefault();
    const res = await Axios.post("/login", {
      email: this.state.email,
      password: this.state.password
    });
    this.setState({ responseFromServer: res.data });

    this.props.pick(this.state.responseFromServer);
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBBtn
              color="indigo"
              onClick={() => {
                this.props.click(0);
              }}
            >
              Back
            </MDBBtn>
            <form onSubmit={this.onFormSubmit}>
              <div className="rgba-white-light justify-content-center align-items-center">
                <p className="h4 text-center mb-4">Login</p>
                <label htmlFor="defaultFormLoginEmailEx" className="black-text">
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  required
                  onChange={prvt => this.setState({ email: prvt.target.value })}
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
                  onChange={prvt =>
                    this.setState({ password: prvt.target.value })
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
