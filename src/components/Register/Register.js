import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Логотип"></img>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          value="Таня"
          name="name"
          type="text"
          id="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
        ></input>
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          value="pochta@yandex.ru"
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          required
          autoComplete="off"
        ></input>
        <label className="register__label">Пароль</label>
        <input
          className="register__input register__input_error"
          value="12345678"
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          required
          autoComplete="off"
        ></input>
        <p className="register__error">Что-то пошло не так...</p>
        <button className="register__submit" type="submit">
          Зарегистрироваться
        </button>
        <p className="register__text">
          Уже зарегистрированы?{" "}
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
