import arrow from "../../images/arrow.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://hideto13.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link__text">Статичный сайт</span>
            <img className="link__img" src={arrow} alt="arrow"></img>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://hideto13.github.io/russian-travel/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link__text">Адаптивный сайт</span>
            <img className="link__img" src={arrow} alt="arrow"></img>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://tkozlova.nomoredomains.xyz/"
            className="portfolio__link portfolio__link_last"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link__text">Одностраничное приложение</span>
            <img className="link__img" src={arrow} alt="arrow"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
