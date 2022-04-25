import React, {Fragment, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {useState} from 'react'
import './Home.css';
import { ListGroupItemHeading } from 'reactstrap';

function Home() {
  const [title, setTitle] = useState("");
  const [games, setGames] = useState([]);

  async function onEnterForm(e) {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/search/?title=' + title);
      const parseResponse = await response.json();
      
      setGames(parseResponse);
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

      const parseResponse = await response.json();
      console.log(parseResponse);

      setGames(parseResponse);

    } catch (error) {
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    getAllGames()
  }, []);

  return (
    <div className="Home">
      <Navibar/>
      <div className = "storediv">
        <form onSubmit = {onEnterForm}>
          <input type = "text" onChange={e => setTitle(e.target.value)} placeholder="Search..." />
          <button containerStyle = {{padding: 90, margin: 400}} className = "button" type="submit">Enter</button>
        </form>
        <table className="table my-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            { games.map(game => (
              <tr key={game.game_id}>
                <td>{game.title}</td>
                <td>{game.rating}</td>
                <td>{game.base_price}</td>
                <td>{game.release_date}</td>
              </tr>
            ))

            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;