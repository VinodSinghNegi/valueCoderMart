import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";
import Axios from "axios";

class HomePage extends Component {
  onLogout = async event => {
    event.preventDefault();
    await Axios.post("/logout", {
      email: this.state.email,
      password: this.state.password
    });
  };
  render() {
    return (
      <>
        <MDBView
          src={`http://cdn.miscellaneoushi.com/2000x1000/20180527/5b0a6591f2310.jpg`}
          fixed
        >
          <MDBMask className=" justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="display-3 mb-0 pt-md-5 pt-5 indigo-text font-weight-bold">
                    VALUE{" "}
                    <span className="orange-text font-weight-bold">
                      CODERS{" "}
                    </span>
                    <span className="white-text font-weight-bold">MART</span>
                  </h1>
                  <MDBBtn className="white btn-light-blue" size="lg">
                    Add Items
                  </MDBBtn>
                  <MDBBtn
                    className="white btn-light-blue"
                    size="lg"
                    onClick={this.onLogout}
                  >
                    Logout
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default HomePage;
