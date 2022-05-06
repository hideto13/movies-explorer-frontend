import searchImg from "../../images/search.svg";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            name="movie"
            id="movie"
            placeholder="Фильм"
          ></input>
          <button type="submit" className="search__submit">
            <img className="search__img" src={searchImg} alt="search"></img>
          </button>
        </div>
        <label className="search__checkbox">
          Короткометражки
          <input
            className="checkbox__input"
            type="checkbox"
            р
            name="short-movie"
            id="short-movie"
          ></input>
          <div className="checkbox__wrapper"></div>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
