import okImg from "../../images/ok.svg";
import deleteImg from "../../images/delete.svg";
import { addMovie } from "../../utils/MainApi";
import "./MoviesCard.css";

function MoviesCard({
  variant,
  nameRU,
  duration,
  trailerLink,
  nameEN,
  country,
  director,
  year,
  description,
  image,
  thumbnail,
  movieId,
}) {
  function addSavedMovie() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      addMovie(
        jwt,
        nameRU,
        nameEN,
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId
      )
        .then((movie) => {
          console.log(movie);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <li className="card">
      <div className="card__header">
        <p className="card__name">{nameRU}</p>
        <p className="card__time">{duration} минут</p>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img className="card__img" src={image} alt="movie"></img>
      </a>
      <div className="card__footer">
        {variant === "success" && (
          <button className="card__button card__button_success">
            <img
              className="button__img button__img_success"
              src={okImg}
              alt="ok"
            ></img>
          </button>
        )}

        {variant === "save" && (
          <button
            className="card__button card__button_save"
            onClick={addSavedMovie}
          >
            Сохранить
          </button>
        )}

        {variant === "delete" && (
          <button className="card__button card__button_delete">
            <img
              className="button__img button__img_delete"
              src={deleteImg}
              alt="delete"
            ></img>
          </button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
