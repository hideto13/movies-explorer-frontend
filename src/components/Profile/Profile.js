import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, Таня!</h1>
        <ul className="profile__list">
          <li className="profile__item">
            <p className="profile__description">Имя</p>
            <p className="profile__text">Таня</p>
          </li>
          <li className="profile__item">
            <p className="profile__description">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </li>
        </ul>
        <div className="profile__buttons">
          <button className="profile__button profile__button_edit">
            Редактировать
          </button>
          <button className="profile__button profile__button_exit">
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
