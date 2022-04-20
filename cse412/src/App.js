import './App.css';
import React, { useLayoutEffect, useState, } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from './components/navbarcomp/Navibar'
import Signin from './pages/Signin/Signin';
import Home from './pages/Home'
import Games from './pages/Games/Games'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap'
import logo from './assets/steamlogo.jpg';



  
function App() {
  return (
    <div className="App">
      <Navbar bg = "dark" variant = "dark" sticky ="top">
        <Navbar.Brand>
          <img src={logo}  height = "40" width = "40" alt = "Logo"/>
          {' '}Steam
        </Navbar.Brand>
        <div className="navbarpages">
        <Nav>
          {/* <Link to="/">Home</Link>
          <Link to="/Games">Games</Link>
          <Link to="/Signin">Sign in</Link> */}
          <Nav.Link href="/cse412/src/pages/Home.js">Home</Nav.Link>
          <Nav.Link href="../src/pages/Games/Games.js">Games</Nav.Link>
          <Nav.Link href="Login">Login</Nav.Link>
        </Nav>
        </div>
        
      </Navbar>
      <div className = "content">
        content.
      </div>
    </div>

/* <Navbar/>
<Route exact path="/" component ={Home}/>
<Route exact path="/signin" compnent = {Signin}/>
<Route exact path="/games" component = {Games}/>
<Route exact path="/" component = {Home}/>
<Route exact path="/signin" component = {Signin}/> */


    
  );
}

export default App;
