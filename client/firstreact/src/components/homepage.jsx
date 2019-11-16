import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import Axios from "axios";
import Addproduct from "./addproduct"
import { JwModal } from './JwModal';
import Cookie from 'js-cookie';
import Logout from './logout'
import ShowProducts from './showproducts'
import PreviousList from './previouslist'

class HomePage extends Component {

  state = { gotoProducts: "", submitted: false, showProducts: null };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  isSubmitted = async (val) => {
    await this.setState({ submitted: val })

    if (this.state.submitted === true) {
      this.setState({ gotoProducts: null })
      this.setState({ showProducts: <ShowProducts email={this.props.email} /> })
    }
  }


  onAddProduct = () => {
    this.setState({ gotoProducts: <Addproduct email={this.props.email} submitted={this.isSubmitted} /> })
  }


  render() {
    return (
      <>


        <MDBMask>
          <MDBContainer>
            <div style={{ float: 'right' }} size="sm">
              <Logout email={this.props.email} logout={this.props.logout} value={this.props.value} login={this.props.login} />
            </div>
            <MDBRow className=" justify-content-center align-items-center">
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h4 className="display-3 mb-0 pt-md-5 pt-5 indigo-text font-weight-bold">
                  VALUE{" "}
                  <span className="orange-text font-weight-bold">
                    CODERS{" "}
                  </span>
                  <span className="white-text font-weight-bold">MART</span>
                </h4>

                <MDBBtn className="white btn-light-blue" size="sm" onClick={() => { this.onAddProduct() }}>
                  Add Products
                  </MDBBtn>
                <div style={{ float: 'center' }}><center>
                  {
                    this.props.email ? <PreviousList email={this.props.email} /> : ""
                  }

                  {this.state.gotoProducts}
                  {/* {this.state.showProducts} */}

                </center>
                </div>

                {/* <button onClick={JwModal.open('custom-modal-1')}>Add products</button>  */}
              </MDBCol>
            </MDBRow>

          </MDBContainer>
        </MDBMask>

      </>
    );
  }
}

export default HomePage;
