import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(e.target.validationMessage);
    if (
      e.target.validationMessage === "" &&
      !validator.isEmail(e.target.value)
    ) {
      setEmailError("Некорректный email");
    }
    setIsEmailValid(
      e.target.validity.valid && validator.isEmail(e.target.value)
    );
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError(e.target.validationMessage);
    setIsPasswordValid(e.target.validity.valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email,
      password,
    });
  }

  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Логотип"></img>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">E-mail</label>
        <input
          className={`login__input ${
            isEmailValid ? "" : " login__input_error"
          }`}
          value={email || ""}
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          required
          autoComplete="off"
          onChange={handleEmailChange}
        ></input>
        <p className="login__error">{emailError}</p>
        <label className="login__label">Пароль</label>
        <input
          className={`login__input ${
            isPasswordValid ? "" : " login__input_error"
          }`}
          value={password || ""}
          name="password"
          type="password"
          id="password"
          placeholder="Пароль"
          required
          autoComplete="off"
          onChange={handlePasswordChange}
        ></input>
        <p className="login__error">{passwordError}</p>
        <button
          className="login__submit"
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
        >
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
