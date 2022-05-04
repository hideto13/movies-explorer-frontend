import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__main">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__socials">
          <li className="footer__social">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__social">
            <a
              className="footer__link"
              href="https://github.com/hideto13"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="footer__social">
            <a
              className="footer__link"
              href="https://www.facebook.com/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
