import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";
import { getSavedMovies } from "../../utils/MainApi";
import {
  filterMoviesByName,
  filterShortMovies,
} from "../../utils/FilterMovies";
import {
  INITIAL_NUMBER_OF_MOVIES_DESKTOP,
  INITIAL_NUMBER_OF_MOVIES_MOBILE,
  INITIAL_NUMBER_OF_MOVIES_TABLET,
  NUMBER_OF_MORE_MOVIES_DESKTOP,
  NUMBER_OF_MORE_MOVIES_MOBILE,
} from "../../utils/constants";

import "./Movies.css";

function Movies() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesCounter, setMoviesCounter] = useState(0);
  const [moviesCounterStep, setMoviesCounterStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingFailed, setIsSearchingFailed] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [filterShort, setFilterShort] = useState(false);

  function handleSearchMovie({ searchValue, filterShort }) {
    setIsSearching(true);
    let filtered = initialMovies;
    if (filterShort) {
      filtered = filterShortMovies(filtered);
    }
    filtered = filterMoviesByName(filtered, searchValue);
    window.localStorage.setItem("movies", JSON.stringify(filtered));
    window.localStorage.setItem("searchValue", searchValue);
    window.localStorage.setItem("filterShort", filterShort);
    setMovies(filtered);
  }

  function fetchInitialMovies() {
    setIsLoading(true);
    getMovies()
      .then((movies) => {
        setIsSearchingFailed(false);

        setInitialMovies(movies);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsSearchingFailed(true);
        console.log(err);
      });
  }

  function handleResize() {
    if (window.screen.width >= 1023) {
      setMoviesCounter(INITIAL_NUMBER_OF_MOVIES_DESKTOP);
      setMoviesCounterStep(NUMBER_OF_MORE_MOVIES_DESKTOP);
    } else if (window.screen.width >= 767) {
      setMoviesCounter(INITIAL_NUMBER_OF_MOVIES_TABLET);
      setMoviesCounterStep(NUMBER_OF_MORE_MOVIES_MOBILE);
    } else {
      setMoviesCounter(INITIAL_NUMBER_OF_MOVIES_MOBILE);
      setMoviesCounterStep(NUMBER_OF_MORE_MOVIES_MOBILE);
    }
  }

  function fetchSavedMovies() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getSavedMovies(jwt)
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
    fetchInitialMovies();
    fetchSavedMovies();

    const movies =
      (window.localStorage.getItem("movies") &&
        JSON.parse(window.localStorage.getItem("movies"))) ||
      [];
    setSearchValue(window.localStorage.getItem("searchValue") || "");
    const filter = window.localStorage.getItem("filterShort");
    if (movies.length > 0) {
      setIsSearching(true);
    }
    if (filter === "true") {
      setFilterShort(true);
    } else {
      setFilterShort(false);
    }

    setMovies(movies);
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
      {isLoading ? (
        <Preloader />
      ) : isSearchingFailed ? (
        <div className="movies__container">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </div>
      ) : isSearching && movies.length === 0 ? (
        <div className="movies__container">Ничего не найдено</div>
      ) : (
        <MoviesCardList>
          {!movies ? (
            ""
          ) : (
            <>
              {movies
                .slice(0, moviesCounter)
                .map(
                  ({
                    id,
                    nameRU,
                    duration,
                    image,
                    trailerLink,
                    nameEN,
                    country,
                    director,
                    year,
                    description,
                  }) => (
                    <MoviesCard
                      key={id}
                      movieId={id}
                      variant={
                        savedMovies.filter((item) => item.movieId === id)
                          .length > 0
                          ? "success"
                          : "save"
                      }
                      image={`https://api.nomoreparties.co/${image.url}`}
                      duration={duration}
                      nameRU={nameRU}
                      trailerLink={trailerLink}
                      nameEN={nameEN}
                      country={country}
                      director={director}
                      year={year}
                      description={description}
                      thumbnail={`https://api.nomoreparties.co/${image.formats.thumbnail.url}`}
                      savedId={
                        savedMovies.filter((item) => item.movieId === id)
                          .length > 0 &&
                        savedMovies.filter((item) => item.movieId === id)[0]._id
                      }
                      fetchSavedMovies={fetchSavedMovies}
                    />
                  )
                )}
            </>
          )}
        </MoviesCardList>
      )}

      {movies.length > 0 && moviesCounter < movies.length ? (
        <section className="more">
          <button
            className="more__button"
            type="button"
            onClick={() => {
              setMoviesCounter((prevState) => prevState + moviesCounterStep);
            }}
          >
            Ещё
          </button>
        </section>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
}

export default Movies;
