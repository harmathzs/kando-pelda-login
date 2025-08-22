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

import LoginForm from './LoginForm';

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

        {this.state.isLoggedIn 
        ? <p>Logged in as {this.state.loggedInName}!</p> 
        : <LoginForm />
        }

      </Navbar>
      <Container>
        {!this.state.isLoggedIn && <p>Tip: try joe:screwdriver </p>}
      </Container>
    </div>
  }
}


