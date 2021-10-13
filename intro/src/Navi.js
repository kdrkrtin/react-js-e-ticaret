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

export default class Navi extends Component {
  renderYourCart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                -
              </Badge>
              &nbsp;
              {cartItem.product.productName}
              &nbsp;
              <Badge color="success"> {cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go To Your Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <Navbar color="light" light expand="md" className="mb-5">
        <div className="container">
          <NavbarBrand>
            <NavItem>
              <NavLink>
                <Link to="/">ReactStrap</Link>
              </NavLink>
            </NavItem>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/form">Form</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/form2">Form2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              {this.props.cart.length > 0
                ? this.renderYourCart()
                : this.renderEmpty()}
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
