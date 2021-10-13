import React, { Component } from "react";
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from "alertifyjs";
import './assets/css/main.css';

export default class App extends Component {
  state = { categoryCurrent: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = abbba => {
    this.setState({ categoryCurrent: abbba.categoryName });
    this.getProducts(abbba.id);
  }

  getProducts = id => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "/?categoryId=" + id;
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));
  }
  render() {
    let infoProduct = { title: "Product List", abc: 'fgelgelge' }
    let infoCategory = { title: "Category List" }
    return (
      <div>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Container>
          <Row>
            <Col xs="3" className="category-list-col">
              <CategoryList categoryCurrent={this.state.categoryCurrent} changeCategory={this.changeCategory} info={infoCategory}></CategoryList>
            </Col>
            <Col xs="9" className="product-list-col">
              <ProductList info={infoProduct} products={this.state.products}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
      // json-server --watch db.json
    );
  }
}
