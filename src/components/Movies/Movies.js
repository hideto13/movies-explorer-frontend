import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { getMovies } from "../../utils/MoviesApi";

import "./Movies.css";

function Movies() {
  const initialMoviesCountMobile = 5;
  const initialMoviesCountTablet = 8;
  const initialMoviesCountDesktop = 12;

  const moreMoviesCountMobile = 2;
  const moreMoviesCountDesktop = 3;

  const [movies, setMovies] = React.useState([]);
  const [moviesCounter, setMoviesCounter] = React.useState(0);

  function handleSearchMovie(movie) {
    getMovies()
      .then((movies) => {
        setMovies(movies);
        setMoviesCounter(initialMoviesCountDesktop);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Header />
      <SearchForm onSearchMovie={handleSearchMovie} />

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
      {movies.length > 0 ? (
        <section className="more">
          <button
            className="more__button"
            type="button"
            onClick={() => {
              setMoviesCounter(
                (prevState) => prevState + moreMoviesCountDesktop
              );
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
