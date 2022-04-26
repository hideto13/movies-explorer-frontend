import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        width="38"
        height="38"
        alt="Логотип"
      />
      <div className="header__container">
        {loggedIn ? (
          <>
            <Navigation />
            <Link className="header__link" to="/profile">
              Аккаунт
            </Link>
          </>
        ) : (
          <>
            <Link className="header__link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__link" to="/signin">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
