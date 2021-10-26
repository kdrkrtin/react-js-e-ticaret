import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from 'react-router-dom';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import CartList from './CartList';
import NotFound from './NotFound';
import FormDemo from './FormDemo';
export default class App extends Component {
  state = { categoryCurrent: "", products: [], cart: [] };
  componentDidMount() {
    this.getProducts();
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    let addItem = newCart.find(i => i.product.id === product.id);
    if (addItem) {
      addItem.quantity += 1;
      alertify.success(product.productName + ' ürününün sepetteki adedi ' + addItem.quantity + ' oldu.', 2);
    } else {
      newCart.push({
        product: product,
        quantity: 1,
      });
      alertify.success(product.productName + ' ürünü sepete eklendi.', 2);
    }
    this.setState({
      cart: newCart,
    });
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({
      cart: newCart,
    });
    alertify.error(product.productName + ' ürünü sepetten kaldırıldı.', 2);
  }
  changeCategory = (category) => {
    this.setState({
      categoryCurrent: category.categoryName,
    });
    this.getProducts(category.id);
  }
  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "/?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  
  render() {
    let infoProduct = { title: "Product List", abc: "fgelgelge" };
    let infoCategory = { title: "Category List" };
    return (
      <div id="main">
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Row>
                  <Col xs="3" className="category-list-col">
                    <CategoryList {...props} categoryCurrent={this.state.categoryCurrent} changeCategory={this.changeCategory} info={infoCategory}></CategoryList>
                  </Col>
                  <Col xs="9" className="product-list-col">
                    <ProductList {...props} addToCart={this.addToCart} categoryCurrent={this.state.categoryCurrent} info={infoProduct} products={this.state.products}></ProductList>
                  </Col>
                </Row>
              )}
            />
            <Route exact path="/cart" render={props => (
              <CartList {...props} removeFromCart={this.removeFromCart} cart={this.state.cart} />
            )} />
            <Route exact path="/form" component={FormDemo} />
            <Route exact path="/cart" component={NotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}
