import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";

import "./Movies.css";

function Movies() {
  const initialMoviesCountMobile = 5;
  const initialMoviesCountTablet = 8;
  const initialMoviesCountDesktop = 12;

  const moreMoviesCountMobile = 2;
  const moreMoviesCountDesktop = 3;

  const [movies, setMovies] = useState([]);
  const [moviesCounter, setMoviesCounter] = useState(0);
  const [moviesCounterStep, setMoviesCounterStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchMovie(movie) {
    setIsLoading(true);
    getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  function handleResize() {
    if (window.screen.width >= 1023) {
      setMoviesCounter(initialMoviesCountDesktop);
      setMoviesCounterStep(moreMoviesCountDesktop);
    } else if (window.screen.width >= 767) {
      setMoviesCounter(initialMoviesCountTablet);
      setMoviesCounterStep(moreMoviesCountMobile);
    } else {
      setMoviesCounter(initialMoviesCountMobile);
      setMoviesCounterStep(moreMoviesCountMobile);
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
  }, []);

  return (
    <>
      <Header />
      <SearchForm onSearchMovie={handleSearchMovie} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList>
          <>
            {movies
              .slice(0, moviesCounter)
              .map(({ id, nameRU, duration, image }) => (
                <MoviesCard
                  key={id}
                  variant="save"
                  img={`https://api.nomoreparties.co/${image.url}`}
                  duration={duration}
                  name={nameRU}
                />
              ))}
          </>
        </MoviesCardList>
      )}

      {movies.length > 0 ? (
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
