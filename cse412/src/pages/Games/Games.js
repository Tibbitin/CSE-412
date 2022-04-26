//import React from 'react'
import React, {Fragment, useState, useEffect} from 'react'
import './Games.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'



const Games = () => {
  const [name, setName] = useState("");
  const [games, setGames] = useState([]);

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/games", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();

      setGames(parseRes);
      console.log(parseRes);

    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteGame(gid) {
    console.log(gid);
    try {
      const response = await fetch("http://localhost:5000/delete/?game_id=" + gid.game_id, {
        method: "POST", 
        headers: { token: localStorage.token } 
      });
      const parseResponse = await response.json();
      console.log(parseResponse);
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
      <h2>
        <center>
          <b>Dashboard</b>
        </center>
      </h2>
      
      
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
                <td>
                  <button className='btn-md btn-dark btn-block' onClick={() => deleteGame(game)}>Delete Game</button>
                </td>
              </tr>
            ))

            }
          </tbody>
        </table>
    </div>
  );
}


export default Games;