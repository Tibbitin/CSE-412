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
      <Routes>
        <Route exact path="/signin" element = {<Signin/>}/>
        <Route exact path="/games" element = {<Games/>}/>
        <Route exact path="/" element = {<Home/>}/>
      </Routes>            

    </div>  
  );
}

export default App;
