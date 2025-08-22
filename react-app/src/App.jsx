import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class App extends React.Component {
  state = {
    isLoggedIn: false,
    loggedInName: '',
  }

  render() {
    return <div>
      <Navbar bg="dark" variant="dark" fixed="top" style={{padding: '5px'}}>
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </Container>

        {this.state.isLoggedIn ? <p>Logged in as {this.state.loggedInName}!</p> : 
        <Form inline>
          <InputGroup>
            <InputGroup.Text>&#128104;</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
            />
            <InputGroup.Text>&#x1F512;</InputGroup.Text>
            <Form.Control
              type='password'
              placeholder="Password"
              aria-label="Password"
            />
            <Button>Login</Button>
          </InputGroup>
        </Form> }

      </Navbar>
      <Container>
        <p>Tip: try joe:screwdriver </p>
      </Container>
    </div>
  }
}


