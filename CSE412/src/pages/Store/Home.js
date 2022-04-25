import React, {Fragment, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {useState} from 'react'
import './Home.css';
import { ListGroupItemHeading } from 'reactstrap';

function Home() {
  const [title, setTitle] = useState("");

  async function onEnterForm(e) {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/search/?title=' + title);
      console.log(response);

      const parseResponse = await response.json();

      console.log(parseResponse);
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getAllGames() {
    try {
      const response = await fetch("http://localhost:5000/home", {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        mode: "cors"
      });

      const parseRes = await response.json();
      console.log(parseRes);

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getAllGames()
  });


  return (
    <div className="Home">
      <Navibar/>
      <div className = "storediv">
        <form className="d-flex" onSubmit = {onEnterForm}>
          <input type = "text" onChange={e => setTitle(e.target.value)} placeholder="Search..." />
          <button className = "button" type="submit">Enter</button>
        </form>
      </div>
      Store with display of all games
    </div>
  );
}

export default Home;