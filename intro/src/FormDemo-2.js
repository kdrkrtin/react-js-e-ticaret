import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import alertify from 'alertifyjs'

export default class FormDemo2 extends Component {
  state = { userName: "", city: "", email: "", description: "" };
  handleChange = event => {
    //this.setState({userName: event.target.value});
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!")
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Your Description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
              <Label for="city">City</Label>
              <Input type="select" name="city" id="city" onChange={this.handleChange}>
                  <option>Ankara</option>
                  <option>İstanbul</option>
                  <option>Bursa</option>
                  <option>Adana</option>
                  <option>Düzce</option>
              </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
