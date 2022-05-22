import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header({ loggedIn }) {
  const location = useLocation();
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        width="38"
        height="38"
        alt="Логотип"
      />
      {location.pathname === "/" && !loggedIn ? (
        <div className="header__links">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__link_active" to="/signin">
            Войти
          </Link>
        </div>
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;
