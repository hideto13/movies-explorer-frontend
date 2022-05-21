import React, { useState } from "react";
import searchImg from "../../images/search.svg";
import "./SearchForm.css";

function SearchForm({
  onSearchMovie,
  searchValue,
  setSearchValue,
  filterShort,
  setFilterShort,
}) {
  const [errorText, setErrorText] = useState("");

  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
    setErrorText("");
  }

  function handleFilterShortChange(e) {
    setFilterShort(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (searchValue === "") {
      setErrorText("Нужно ввести ключевое слово");
    } else {
      onSearchMovie({
        searchValue,
        filterShort,
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
            onChange={handleFilterShortChange}
            checked={filterShort}
          ></input>
          <div className="checkbox__wrapper"></div>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
