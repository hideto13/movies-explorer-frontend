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
        {movies.map(({ id, nameRU, duration, image, trailerLink }) => (
          <MoviesCard
            key={id}
            variant="delete"
            img={`https://api.nomoreparties.co/${image.url}`}
            duration={duration}
            name={nameRU}
            trailerLink={trailerLink}
          />
        ))}
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
