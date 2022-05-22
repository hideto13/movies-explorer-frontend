export function isShortMovie(duration) {
  if (duration > 40) {
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
