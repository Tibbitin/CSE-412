import './Register.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import React from 'react'

function Register() {
  return (
    <div className="registerpage">
      <Navibar/>
      <Form className = "register">
        <h1 className='text-center'>NOIR Games</h1>
        <h2 className='text-center'>Create your account!</h2>
        <FormGroup className='form1'>
            <Label>Pick a username</Label>
            <Input type = "username" placeholder='Username'/>
        </FormGroup>
        <FormGroup className='form2'>
            <Label>Pick a password</Label>
            <Input type = "password" placeholder='Password'/>
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block' onClick={(e) => {
      e.preventDefault();
      window.location.href='/games';
      }}>Register</Button>
      </Form>
    </div>
  );
}

export default Register;