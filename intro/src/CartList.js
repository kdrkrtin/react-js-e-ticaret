import React, { Component } from 'react'
import {
    Table,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CartList extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Adet</th>
                        <th>Kategori Numarası</th>
                        <th>Ürün Adı</th>
                        <th>Birim Fiyat (TL)</th>
                        <th>Stok Adedi</th>
                        <th>Miktar</th>
                        <th>Sil</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.product.quantityPerUnit}</td>
                                <td><Button onClick={() => this.props.removeFromCart(cartItem.product)} color="danger">Remove</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    renderEmptyCart() {
        return (
            <div className="container">
                <div className="wd-cart d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-dark mb-4 wd-cart-head">
                        Sepet Boş
                    </h3>
                    <div>
                        <Link to="/">
                            <span className="text-white bg-dark px-4 py-2 wd-cart-link">Ürünlere Git</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderCart() : this.renderEmptyCart()
                }
            </div>
        )
    }
}
