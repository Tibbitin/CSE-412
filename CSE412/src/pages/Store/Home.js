import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {useState} from 'react'
import './Home.css';

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