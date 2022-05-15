import React from "react";
import searchImg from "../../images/search.svg";
import "./SearchForm.css";

function SearchForm({ onSearchMovie }) {
  const [searchValue, setSearchValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
    setErrorText("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (searchValue === "") {
      setErrorText("Нужно ввести ключевое слово");
    } else {
      onSearchMovie({
        searchValue,
      });
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            name="movie"
            id="movie"
            required
            placeholder="Фильм"
            onChange={handleSearchValueChange}
            value={searchValue || ""}
          ></input>
          <button type="submit" className="search__submit">
            <img className="search__img" src={searchImg} alt="search"></img>
          </button>
          <span id="text-error" className="search__error">
            {errorText}
          </span>
        </div>
        <label className="search__checkbox">
          Короткометражки
          <input
            className="checkbox__input"
            type="checkbox"
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
