import './Signin.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import React from 'react'

function Signin() {
  return (
    <div className="signinpage">
      <Navibar/>
      <Form className = "signin">
        <h1 className='text-center'>NOIR Games</h1>
        <h2 className='text-center'>Log in to your account!</h2>
        <FormGroup>
            <Label>Username</Label>
            <Input type = "username" placeholder='Username'/>
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input type = "password" placeholder='Password'/>
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block' onClick={(e) => {
      e.preventDefault();
      window.location.href='/games';
      }}>Log in</Button>
        <div className='text-center'>
            <a href="/register">Register</a>
        </div>
      </Form>
    </div>
  );
}

export default Signin;