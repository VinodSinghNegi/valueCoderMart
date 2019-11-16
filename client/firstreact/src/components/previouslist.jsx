import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
// import { showProducts, showProduct, updateProduct, deleteProduct } from '../actions'

import { IconButton } from '@material-ui/core';
// import { Link } from 'react-router-dom';


class MyProducts extends React.Component {

    // componentDidMount() {
    //     this.props.showProducts();
    //     const { products } = this.props;
    //     this.props.showProduct(products._id);
    // }


    render() {
        // const { products } = this.props;
        // console.log("upp", products.state)
        return (
            <MDBContainer className="rgba-white-light" >
                <React.Fragment >
                    <Table size="small" >
                        <TableHead>
                            <TableRow >
                                <TableCell className="orange-text">Product Name</TableCell>
                                <TableCell className="orange-text">Product Quantity</TableCell>
                                <TableCell className="orange-text" align="right">Edit</TableCell>
                                <TableCell className="orange-text" align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {products.state && products.state.map((product, i) => ( */}
                            <TableRow
                            //  key={i}
                            >
                                <TableCell className="white-text">{"product.productname"}</TableCell>
                                <TableCell className="white-text">{"product.productitemtype"}</TableCell>

                                <TableCell className="white-text" align="right"><IconButton
                                // onClick={e => this.props.showProduct(product._id)}
                                >
                                    <Edit />
                                </IconButton></TableCell>
                                <TableCell align="right"><IconButton
                                // onClick={e => this.props.deleteProduct(product._id)}
                                ><Delete /></IconButton></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </React.Fragment>
            </MDBContainer>
        );
    }

}
// const mapStateToProps = (state) => {

//     console.log("state", state.product.state)
//     return { products: state.product }
// }
// export default connect(
//     mapStateToProps, { showProduct, showProducts, updateProduct, deleteProduct }
// )(MyProducts);
export default MyProducts