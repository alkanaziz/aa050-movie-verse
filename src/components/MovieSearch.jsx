import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import avengersData from "../moviesData";
import { FaRegHeart } from "react-icons/fa6";

function MovieSearch() {
  return (
    <Container>
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-6">
          <h2>MOVIE SEARCH:</h2>
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="Search for a movie"
          />
        </div>
      </div>
      <div className="nowrap row">
        {avengersData.map((movie) => {
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
                <FaRegHeart className="like-icon" />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default MovieSearch;
