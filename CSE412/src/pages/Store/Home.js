import React, {Fragment, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {useState} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import './Home.css';

function Home() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState("All");

  async function onEnterForm(e) {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/search/?title=' + title + "&rating=" + rating + "&genre=" + genre + "&price=" + price);
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

  async function getAllGenres() {
    try {
      const response = await fetch("http://localhost:5000/genres", {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        mode: "cors"
      });

      const parseResponse = await response.json();
      console.log(parseResponse);

      setGenres(parseResponse);

    } catch (error) {
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    getAllGames()
  }, []);

  useEffect(() => {
    getAllGenres()
  }, []);

  return (
    <div className="Home">
      <Navibar/>
      <div className = "storediv">
        <form onSubmit = {onEnterForm} className = "filterform">
          <label>Title: {" "}</label>
          <input name="titleVal" type = "text" onChange={e => setTitle(e.target.value)} placeholder="Search..." />
          <label>Minimum Rating:</label>
          <input type="number" required step=".1" name="ratingVal" id="ratingVal" onChange={e => setRating(e.target.value)}></input>          
          <label>Minimum Price:</label>
          <input type="number" required step="5" name="priceVal" id="priceVal" onChange={e => setPrice(e.target.value)}></input>
          <select name="genreVal" size={genres.size + 1} onChange={e => setGenre(e.target.value)}>  
              <option value="All">All</option>
            {genres.map(genre => (
              <option value={genre.genre_name}>{genre.genre_name}</option>
            ))}
          </select>
          <br>
          </br>
          <Button style = {{marginTop: 10 }}className='btn-md btn-dark btn-block' type="submit">Enter</Button>
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