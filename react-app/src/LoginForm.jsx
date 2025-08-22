import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class LoginForm extends React.Component {
    handleLoginButton = e => {
        e.preventDefault();
        //console.log('state', this.state);

        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then(res=>res.json())
        .then(res=>{
            console.log('res', res);
        })
        .catch(console.warn);
    }

    render() {
        return <Form inline="true">
          <InputGroup>
            <InputGroup.Text>&#128104;</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              onChange={e=>this.setState({username: e.target.value})}
            />
            <InputGroup.Text>&#x1F512;</InputGroup.Text>
            <Form.Control
              type='password'
              placeholder="Password"
              aria-label="Password"
              onChange={e=>this.setState({password: e.target.value})}
            />
            <Button onClick={this.handleLoginButton}>Login</Button>
          </InputGroup>
        </Form>
    }
}