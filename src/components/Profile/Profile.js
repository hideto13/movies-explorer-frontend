import React from "react";
import validator from "validator";
import Header from "../Header/Header";
import "./Profile.css";

function Profile({ currentUser, onUpdateUser, onLogout }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [isNameValid, setIsNameValid] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(true);

  function handleNameChange(e) {
    const pattern = /^[A-Za-zА-Яа-яЁё\- ]+$/;
    setName(e.target.value);
    setNameError(e.target.validationMessage);
    if (e.target.validationMessage === "" && !e.target.value.match(pattern)) {
      setNameError("Недопустимое имя");
    }
    setIsNameValid(e.target.validity.valid && e.target.value.match(pattern));
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

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      email,
    });
  }

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  React.useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);

  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form onSubmit={handleSubmit}>
          <ul className="profile__list">
            <li className="profile__item">
              <p className="profile__description">Имя</p>
              <input
                className={`profile__input ${
                  isNameValid ? "" : "profile__input_error"
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
              <p className="profile__error">{nameError}</p>
            </li>
            <li className="profile__item">
              <p className="profile__description">E-mail</p>
              <input
                className={`profile__input ${
                  isEmailValid ? "" : "profile__input_error"
                }`}
                value={email || ""}
                onChange={handleEmailChange}
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                required
                autoComplete="off"
              ></input>
              <p className="profile__error">{emailError}</p>
            </li>
          </ul>
          <div className="profile__buttons">
            <button
              type="submit"
              disabled={
                !isNameValid ||
                !isEmailValid ||
                (name === currentUser.name && email === currentUser.email)
              }
              className="profile__button profile__button_edit"
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_exit"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
