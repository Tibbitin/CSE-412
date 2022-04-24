//import React from 'react'
import React, {Fragment, useState, useEffect} from 'react'
import './Games.css';

import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'



const Games = () => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/games", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      console.log(parseRes);

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getName()
  });

  return (
    <div className="Games">
      <Navibar/>
      Dashboard for user's games
    </div>
  );
}


export default Games;