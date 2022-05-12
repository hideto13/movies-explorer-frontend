import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Логотип"></img>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <label className="login__label">E-mail</label>
        <input
          className="login__input"
          value="pochta@yandex.ru"
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          required
          autoComplete="off"
        ></input>
        <label className="login__label">Пароль</label>
        <input
          className="login__input"
          value="12345678"
          name="password"
          type="password"
          id="password"
          placeholder="Пароль"
          required
          autoComplete="off"
        ></input>
        <p className="login__error"></p>
        <button className="login__submit" type="submit">
          Войти
        </button>
        <p className="login__text">
          Ещё не зарегистрированы?{" "}
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
