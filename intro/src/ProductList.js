import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
    render() {
        return (
            < div className="product-list">
                <div className="product-head">
                    <h3 className="mb-4">{this.props.info.title} {!this.props.categoryCurrent ? '' : '- ' + this.props.categoryCurrent}</h3>
                </div>
                <Table className="table table-striped product-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per unit</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td className="text-center">{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td className="text-center">{product.unitsInStock}</td>
                                <td><Button onClick={() => this.props.addToCart(product)} color="secondary">Add</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}