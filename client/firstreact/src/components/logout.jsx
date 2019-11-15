import React, { Component } from "react"
import { MDBBtn, MDBContainer } from "mdbreact";
import Axios from "axios";


class Logout extends Component {
    state = { isLogout: "" };

    onLogout = async event => {

        const res = await Axios.post("/logout", {
            email: this.props.email

        });

        this.setState({ isLogout: res.data });
        if (this.state.isLogout === "success") {
            this.props.logout("success");
            this.props.login("error")
            this.props.value(0)
        }

    };

    render() {
        return (
            <MDBContainer>
                <MDBBtn
                    className="white btn-light-blue"
                    size="lg"
                    onClick={this.onLogout}
                >
                    Logout
          </MDBBtn>
                <p>{this.state.isLogout}</p>
            </MDBContainer>
        )
    }


}

export default Logout