import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";

class Intro extends Component {
  render() {
    return (
      <>
        <MDBView
          src={`http://cdn.miscellaneoushi.com/2000x1000/20180527/5b0a6591f2310.jpg`}
          fixed
        >
          <MDBMask className=" d-flex justify-content-center align-items-center">
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
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 orange-text font-weight-bold">
                    CODE - COFFEE - REPEAT{" "}
                  </h5>
                  <MDBBtn
                    className="white btn-light-blue"
                    size="lg"
                    onClick={() => {
                      this.props.click(1);
                    }}
                  >
                    log in
                  </MDBBtn>
                  <MDBBtn
                    className="white btn-indigo"
                    size="lg"
                    onClick={() => {
                      this.props.click(2);
                    }}
                  >
                    signup
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

export default Intro;
