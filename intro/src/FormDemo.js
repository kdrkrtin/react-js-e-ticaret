import React, { Component } from 'react'
import { Form,Input,Button } from 'reactstrap';

export default class FormDemo extends Component {
    state = { userName: '', city: '' }
    onChangeHandle = (event) => {
        this.setState({userName: event.target.value});
        // let name = event.target.name;
        // let value = event.target.value;

        // this.setState({[name]: value});
    }
    onSubmitHandle = (event) => {
        event.preventDefault();
        
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <Input name="userName" onChange={this.onChangeHandle} type="text"></Input>
                    <h5>User Name: {this.state.userName}</h5>
                    <br />
                    <h3>City</h3>
                    <Input name="city" onChange={this.onChangeHandle} type="text"></Input>
                    <h5>City: {this.state.city}</h5>
                    <br />
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
