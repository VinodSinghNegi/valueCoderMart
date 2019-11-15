import React, { Component } from "react"
import Axios from "axios"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class ShowProducts extends Component {
    state = { listOfProduct: null }

    async componentDidMount() {
        const res = await Axios.post('/items/show', {
            email: this.props.email
        })
        this.setState({ listOfProduct: res.data })
        console.log(this.state.listOfProduct)
    }
    renderList(){
        return this.state.listOfProduct.map((product)=>{
            return (
                <li>{product}</li>
            )
        })
    }

    render() {
        console.log(this.state.listOfProduct)
        return (
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            {/* {this.renderList()} */}
                        </MDBCardText>
                        <MDBBtn href="#">Edit</MDBBtn> <MDBBtn href="#">Delete</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}

export default ShowProducts