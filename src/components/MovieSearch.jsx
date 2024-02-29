import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaRegHeart } from "react-icons/fa6";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Fetch Information von API
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchValue !== "") {
      getMovieRequest(searchValue);
    }
    console.log(searchValue);
  }, [searchValue]);

  function addToFavorites(value) {
    const newFavorites = [...favorites, value];
    setFavorites(newFavorites);
  }

  return (
    <Container>
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-6">
          <h2>MOVIE SEARCH:</h2>
        </div>
        <div className="col-6">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Search for a movie"
          />
        </div>
      </div>
      <div className="nowrap row">
        {movies.map((movie) => {
          return (
            <Card
              className="pt-3 m-3"
              style={{ width: "18rem" }}
              key={movie.imdbID}
            >
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title>
                  {movie.Title} ({movie.Year})
                </Card.Title>
                <FaRegHeart
                  className="like-icon"
                  onClick={() => addToFavorites(movie)}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* FAVORITES SECTION START */}
      <div className="row align-items-center justify-content-center mt-4">
        <div>
          <h2>FAVORITES LIST:</h2>
        </div>
      </div>
      <div className="nowrap row">
        {favorites.map((movie) => {
          return (
            <Card
              className="pt-3 m-3"
              style={{ width: "18rem" }}
              key={movie.imdbID}
            >
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title>
                  {movie.Title} ({movie.Year})
                </Card.Title>
                <FaRegHeart
                  className="like-icon"
                  onClick={() => addToFavorites(movie)}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {/* FAVORITES SECTION END  */}
    </Container>
  );
}

export default MovieSearch;
