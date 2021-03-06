import './Signin.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import React, {Fragment, useState} from 'react'
import { use } from 'bcrypt/promises';

const Signin = (/*{setAuth}*/) => {
  const [username, setUsername] = useState("");
  const [consumer_password, setConsumer_Password] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const onSubmitButton = async(e) => {
    
    e.preventDefault();
    try{
      const body = {username, consumer_password};
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify(body)
      });
      const parseResponse = await response.json();
      console.log(parseResponse);
      if(parseResponse.token)
      {
        localStorage.setItem('token', parseResponse.token);
        window.location.href='/games';
        setCheckPassword("")
      }
      else
      {
        console.log("Please");
        setCheckPassword("Fail");
      }
    }
    catch (error) {
      console.error(error.message)
      // setCheckPassword("FAIL");
    }
  };

  if(checkPassword === "Fail")
  {
    alert("Username or Password is incorrect");
    setCheckPassword("");
  }

  return (
    <div className="signinpage">
      <Navibar/>
      <Form onSubmit={onSubmitButton} className = "signin">
        <h1 className='text-center'>NOIR Games</h1>
        <h2 className='text-center'>Log in to your account!</h2>
        <FormGroup>
            <Label>Username</Label>
            <Input type = "username" value = {username} onChange = {e => setUsername(e.target.value)} placeholder='Username'/>
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input type = "password" value = {consumer_password} onChange = {e => setConsumer_Password(e.target.value)} placeholder='Password'/>
        </FormGroup>
        {/* <button onClick={(e) => { e.preventDefault(); window.location.href='/games'; }} type="submit">Submit</button> */}
        <Button onClick={onSubmitButton} className='btn-lg btn-dark btn-block'>Submit</Button>
        <div className='text-center'>
            <a href="/register" onClick={(e) => { e.preventDefault(); window.location.href='/register'; }}>Register</a>
        </div>
      </Form>
    </div>
  );
};

export default Signin;