import React from 'react'
import './Games.css';

import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'

function Games() {
  return (
    <div className="Games">
      <Navibar/>
      Dashboard for user's games
    </div>
  );
}

export default Games;