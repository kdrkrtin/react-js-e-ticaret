import React, { Component } from 'react'
import { Form, Input, Button } from 'reactstrap';
import alertify from 'alertifyjs';
import Label from 'reactstrap/lib/Label';
import FormGroup from 'reactstrap/lib/FormGroup';

export default class FormDemo extends Component {
    state = {
        userName: null,
        city: null,
        email: null,
        password: null,
        desc: null,
    }
    onChangeHandle = (event) => {
        // this.setState({userName: event.target.value});
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value,
        });
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + ' eklendi')
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for="name">Ad Soyad</Label>
                        <Input autocomplete="off" id="name" name="userName" onChange={this.onChangeHandle} type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input autocomplete="off" id="email" name="email" onChange={this.onChangeHandle} type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Sifre</Label>
                        <Input autocomplete="off" id="password" name="password" onChange={this.onChangeHandle} type="password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Aciklama</Label>
                        <Input autocomplete="off" id="desc" name="desc" onChange={this.onChangeHandle} type="textarea"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Sehir</Label>
                        <Input id="city" name="city" onChange={this.onChangeHandle} type="select">
                            <option>Ankara</option>
                            <option>Istanbul</option>
                            <option>Izmir</option>
                            <option>Antalya</option>
                            <option>Aydin</option>
                            <option>Mugla</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn btn-sm bg-dark-gray text-white">Save</Button>
                </Form>
            </div>
        )
    }
}
