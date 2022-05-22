import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { getSavedMovies } from "../../utils/MainApi";
import {
  filterMoviesByName,
  filterShortMovies,
} from "../../utils/FilterMovies";
import "./SavedMovies.css";

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterShort, setFilterShort] = useState(false);

  function handleSearchMovie({ searchValue, filterShort }) {
    let filtered = movies;
    if (filterShort) {
      filtered = filterShortMovies(filtered);
    }
    filtered = filterMoviesByName(filtered, searchValue);
    setMovies(filtered);
  }

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
      <SearchForm
        onSearchMovie={handleSearchMovie}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterShort={filterShort}
        setFilterShort={setFilterShort}
      />
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
