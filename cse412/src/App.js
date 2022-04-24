import './App.css';
import React, { useLayoutEffect, useState, } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Signin from './pages/Signin/Signin';
import Home from './pages/Store/Home'
import Games from './pages/Games/Games'
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom";
import Register from './pages/Register/Register'




  
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element = {<Home/>}/>
        <Route exact path="/games" element = {<Games/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/" element = {<Signin/>}/>
      </Routes>            

    </div>  
  );

  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route exact path="/home" render = {props => !isAuthenticated ? <Home {...props} setAuth={setAuth}/> : <Navigate to="/games"/>} element = {<Home/>}/>
  //       <Route exact path="/games" render = {(props) => isAuthenticated ? <Games {...props} setAuth={setAuth}/> : <Navigate to="/login"/>} element = {<Games/>}/>
  //       <Route exact path="/register" render = {(props) => !isAuthenticated ? <Register {...props} setAuth={setAuth}/> : <Navigate to="/"/>} element = {<Register/>}/>
  //       <Route exact path="/" render = {(props) => !isAuthenticated ? (<Signin {...props} setAuth={setAuth}/>) : <Navigate to="/games"/>} element = {<Signin/>}/>
  //     </Routes>  
  //   </div>  
  // );
}

export default App;
