import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { getSavedMovies } from "../../utils/MainApi";
import "./SavedMovies.css";

function SavedMovies() {
  const [movies, setMovies] = useState([]);

  function fetchSavedMovies() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getSavedMovies(jwt)
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    fetchSavedMovies();
  }, []);
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList>
        {movies.map(
          ({ _id, movieId, nameRU, duration, image, trailerLink }) => (
            <MoviesCard
              key={movieId}
              variant="delete"
              image={image}
              duration={duration}
              nameRU={nameRU}
              trailerLink={trailerLink}
              savedId={_id}
              fetchSavedMovies={fetchSavedMovies}
            />
          )
        )}
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
