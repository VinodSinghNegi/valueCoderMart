import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Axios from "axios";

class LoginPage extends Component {
    state = { productName: "", pickItem: null, itemName: [], responseFromServer: "", email: this.props.email };
    onFormSubmit = async event => {
        event.preventDefault();

        const res = await Axios.post("/items", {
            productName: this.state.productName,
            itemName: this.state.itemName,
            email: this.state.email
        });
        this.setState({ responseFromServer: res.data });
        if (this.state.responseFromServer === "success") {
            this.setState({ pickItem: null })
            this.props.submitted(true)
        }


    };


    saveItem = (event) => {
        this.setState({ itemName: [...this.state.itemName, event.target.value] })


    }

    render() {
        return (
            <MDBContainer >
                <MDBRow className="rgba-white-light d-flex justify-content-center ">
                    <MDBCol md="6">
                        <form onSubmit={this.onFormSubmit}>
                            <div className=" justify-content-center align-items-center">
                                <label htmlFor="defaultFormLoginEmailEx" className="black-text">
                                    Product Name
                        </label>
                                <input
                                    type="text"
                                    id="ProductName"
                                    className="form-control"

                                    required
                                    onChange={event => this.setState({ productName: event.target.value })}
                                />
                                <br />
                                <label
                                    htmlFor="ProductName"
                                    className="black-text"
                                >
                                    Item Name
                                </label><br />

                                <label>
                                    Item-1 <input
                                        type="checkbox"
                                        id="ItemtName"
                                        className="form-control"
                                        value="item-1"

                                        onChange={event => this.saveItem(event)}
                                    />

                                </label>
                                <label>
                                    Item-2 <input
                                        type="checkbox"
                                        id="ItemtName"
                                        className="form-control"
                                        value="item-2"

                                        onChange={event => this.saveItem(event)}
                                    />

                                </label>
                                <label>
                                    Item-3 <input
                                        type="checkbox"
                                        id="ItemtName"
                                        className="form-control"
                                        value="item-3"

                                        onChange={event => this.saveItem(event)}
                                    />

                                </label>
                                <label>
                                    Item-4<input
                                        type="checkbox"
                                        id="ItemtName"
                                        className="form-control"
                                        value="item-4"

                                        onChange={event => this.saveItem(event)}
                                    />
                                </label>

                                <div className="text-center mt-4">
                                    <MDBBtn color="indigo" type="submit">
                                        Save Product
                                </MDBBtn>
                                </div>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default LoginPage;
