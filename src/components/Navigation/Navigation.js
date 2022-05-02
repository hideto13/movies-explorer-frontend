import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const navigationClassName = `navigation ${
    navIsOpen ? "navigation_visible" : ""
  }`;
  return (
    <>
      <nav className={navigationClassName}>
        <span
          className="navigation__close"
          onClick={() => {
            setNavIsOpen(false);
          }}
        ></span>
        <div className="navigation__list">
          <Link to="/" className="navigation__item navigation__item_main">
            Главная
          </Link>
          <Link
            to="/movies"
            className="navigation__item navigation__item_active"
          >
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__item">
            Сохраненные фильмы
          </Link>
        </div>
        <Link className="navigation__account" to="/profile">
          Аккаунт
        </Link>
      </nav>
      <button
        className="navigation__menu"
        onClick={() => {
          setNavIsOpen(true);
        }}
      ></button>
    </>
  );
}

export default Navigation;
