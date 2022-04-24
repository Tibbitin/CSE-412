import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {useState} from 'react'
import './Home.css';
import { ListGroupItemHeading } from 'reactstrap';


function glist() {
  var parseResponse = "failed";
  try{
    const response = fetch("http://localhost:5000/home", {
      method: "GET", 
      headers: { "Content-Type": "application/json"},
      mode: "cors"
    });
    parseResponse = response.json();
    console.log(parseResponse);
  } catch(error) {
    console.error(error.message);
  }
  return <p>{parseResponse}</p>;
}


function Home() {


  return (
    <div className="Home">
      <Navibar/>
      <div className = "storediv">
        <input type = "text" placeholder="Search..." />
          <button className = "button" type = "submit">Enter</button>
      </div>
      Store with display of all games
    </div>
  );
}

export default Home;