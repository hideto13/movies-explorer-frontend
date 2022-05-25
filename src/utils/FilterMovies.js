import { SHORT_MOVIE_DURATION } from "./constants";

export function isShortMovie(duration) {
  if (duration > SHORT_MOVIE_DURATION) {
    return false;
  }
  return true;
}

export function isMovieIncludesName(movie, name) {
  if (movie.nameRU.toLowerCase().includes(name.toLowerCase())) {
    return true;
  }
  return false;
}

export function filterMoviesByName(movies, name) {
  return movies.filter((movie) => isMovieIncludesName(movie, name));
}

export function filterShortMovies(movies) {
  return movies.filter((movie) => isShortMovie(movie.duration));
}

export function filterUserMovies(movies, user) {
  return movies.filter((movie) => movie.owner === user._id);
}
