import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { NAME_PATTERN } from "../../utils/constants";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register({ onRegister }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
    setNameError(e.target.validationMessage);
    if (
      e.target.validationMessage === "" &&
      !e.target.value.match(NAME_PATTERN)
    ) {
      setNameError("Недопустимое имя");
    }
    setIsNameValid(
      e.target.validity.valid && e.target.value.match(NAME_PATTERN)
    );
  }

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

    onRegister({
      name,
      email,
      password,
    });
  }

  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Логотип"></img>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label">Имя</label>
        <input
          className={`register__input ${
            isNameValid ? "" : " register__input_error"
          }`}
          value={name || ""}
          name="name"
          type="text"
          id="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
          onChange={handleNameChange}
        ></input>
        <p className="register__error">{nameError}</p>
        <label className="register__label">E-mail</label>
        <input
          className={`register__input ${
            isEmailValid ? "" : " register__input_error"
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
        <p className="register__error">{emailError}</p>
        <label className="register__label">Пароль</label>
        <input
          className={`register__input ${
            isPasswordValid ? "" : " register__input_error"
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

        <p className="register__error">{passwordError}</p>
        <button
          className="register__submit"
          type="submit"
          disabled={!isNameValid || !isEmailValid || !isPasswordValid}
        >
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
