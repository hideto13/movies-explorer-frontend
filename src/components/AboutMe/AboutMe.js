import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Таня</h3>
          <p className="about-me__description">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__about">
            Я родилась и живу в Клину, закончила физико-математический факультет
            РУДН. У меня есть дочь. Я люблю изучать новое, читать книги и
            слушать музыку. Начала кодить в 2018 году. По первому образованию я
            медсестра, раньше я работала в стоматологии. В 2020 году получила
            работу в IT компании в качестве сотрудника техподдержки. После того
            как начала проходить курс по веб-разработке, получила повышение до
            фронтенд-разработчика.
          </p>
          <ul className="about-me__socials">
            <li className="socials__item">
              <a
                className="socials__link"
                href="https://www.facebook.com/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="socials__item">
              <a
                className="socials__link"
                href="https://github.com/hideto13"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="photo"></img>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
