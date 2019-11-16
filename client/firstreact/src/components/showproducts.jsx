import React, { Component } from "react"
import Axios from "axios"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class ShowProducts extends Component {
    state = { itemlist: [], productname: "" }

    async componentDidMount() {
        const res = await Axios.post('/items/show', {
            email: this.props.email
        })
        this.setState({ itemlist: res.data[Object.keys(res.data)], productname: Object.keys(res.data) })

    }


    renderList() {
        var count = 0
        return this.state.itemlist.map((item) => {
            count++;
            return (
                <li key={count}>{item}</li>
            )
        })
    }

    render() {
        console.log(this.state.itemlist)
        return (
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            {this.state.productname}
                            {this.state.itemlist ? this.renderList() : ""}
                            {/* {this.renderList()} */}

                            <MDBBtn href="#">Edit</MDBBtn> <MDBBtn href="#">Delete</MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}

export default ShowProducts