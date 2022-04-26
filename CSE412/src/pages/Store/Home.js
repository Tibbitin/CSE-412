import React, {Fragment, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../../components/navbarcomp/Navibar'
import {useState} from 'react'
import {Button, Form, Row, Col} from 'reactstrap'
import './Home.css';

function Home() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");
  const [price, setPrice] = useState("0");
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
        <Form onSubmit = {onEnterForm} className = "filterform" style = {{marginTop: 25 }}>
          <Row>
            <Col xs = "auto">
            <label>Title: {" "}</label>
          <input name="titleVal" type = "text" onChange={e => setTitle(e.target.value)} placeholder="Search..." />
            </Col>
          <Col xs = "auto">
          <label>Minimum Rating:</label>
          <input type="number" step="0.5" name="ratingVal" id="ratingVal" onChange={e => setRating(e.target.value) } placeholder="0"></input> 
          </Col>
          <Col xs = "auto">
          <label>Minimum Price:</label>
          <input type="number" step="5" name="priceVal" id="priceVal" onChange={e => setPrice(e.target.value)} placeholder="0"></input>
          </Col>       
          <Col xs = "auto">
          <select style = {{marginTop: 25 }} name="genreVal" size={genres.size + 1} onChange={e => setGenre(e.target.value)}>  
              <option value="All">All</option>
            {genres.map(genre => (
              <option value={genre.genre_name}>{genre.genre_name}</option>
            ))}
          </select>
          </Col>
          <Col xs = {8}>
          <Button style = {{marginTop: 25 }}className='btn-md btn-dark btn-block' type="submit">Enter</Button>
          </Col>
          </Row>
        </Form>
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