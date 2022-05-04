import movieImg from "../../images/movie.jpg";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <div className="card">
      <div className="card__header">
        <p className="card__name">В погоне за Бенкси</p>
        <p className="card__time">27 минут</p>
      </div>
      <img className="card__img" src={movieImg} alt="movie"></img>
      <button className="card__button">Сохранить</button>
    </div>
  );
}

export default MoviesCard;
