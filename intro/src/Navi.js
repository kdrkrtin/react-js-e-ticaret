import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from './assets/img/logo.png'

export default class Navi extends Component {
  renderCartLink() {
    return (
      <DropdownItem className="border-top">
        <Link to="cart" className="text-center wd-cart-menu-link">Sepete Git</Link>
      </DropdownItem>
    )
  }
  renderYourCart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <i class="fas fa-cart-plus"></i>
          <span class="wd-unit">{this.props.cart.length}</span>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.length > 0 ? this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                <i class="far fa-trash-alt"></i>
              </Badge>
              &nbsp;
              {cartItem.product.productName}
              &nbsp;
              <Badge color="success"> {cartItem.quantity}</Badge>
            </DropdownItem>
          )) : <div className="px-4 py-2 wd-cart-text text-center text-muted">Sepet Boş</div>}
          {this.props.cart.length > 0 ? this.renderCartLink() : ''}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <Navbar color="light" light expand="md" className="mb-5">
        <div className="container">
          <NavbarBrand>
            <NavItem>
              <NavLink>
                <Link to="/">
                  <img src={logo} width="150" />
                </Link>
              </NavLink>
            </NavItem>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Ürünler</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="./form">
                    Form Doldur
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              {this.renderYourCart()}
            </NavbarText>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
