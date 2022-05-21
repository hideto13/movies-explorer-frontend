import okImg from "../../images/ok.svg";
import deleteImg from "../../images/delete.svg";
import "./MoviesCard.css";

function MoviesCard({ variant, img, name, duration, trailerLink }) {
  return (
    <li className="card">
      <div className="card__header">
        <p className="card__name">{name}</p>
        <p className="card__time">{duration} минут</p>
      </div>
      <a href={trailerLink} target="_blank">
        <img className="card__img" src={img} alt="movie"></img>
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
          <button className="card__button card__button_save">Сохранить</button>
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
