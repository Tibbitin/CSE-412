import './Register.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import React, {Fragment, useState} from 'react'

function Register() {
  const [username, setUsername] = useState("");
  const [consumer_password, setConsumer_Password] = useState("");
  const onSubmitButton = async(e) => {
    e.preventDefault();
    try{
      const body = {username, consumer_password};
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify(body)
      });
      const parseResponse = await response.json();
      console.log(parseResponse);
  
      // check the jwt token
    }
    catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className="registerpage">
      <Navibar/>
      <Form onSubmit = {onSubmitButton}>
        <h1 className='text-center'>NOIR Games</h1>
        <h2 className='text-center'>Create your account!</h2>
        <FormGroup className='form1'>
            <Label>Pick a username</Label>
            <Input type = "username" value = {username} onChange = {e => setUsername(e.target.value)} placeholder='Username'/>
        </FormGroup>
        <FormGroup className='form2'>
            <Label>Pick a password</Label>
            <Input type = "password" value = {consumer_password} onChange = {e => setConsumer_Password(e.target.value)} placeholder='Password'/>
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block'onClick={(e) => { e.preventDefault(); window.location.href='/games';}}>Register</Button>
      </Form>
    </div>
  );
}

export default Register;