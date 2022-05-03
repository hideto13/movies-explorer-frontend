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
            <a className="footer__link" href="#">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__social">
            <a className="footer__link" href="#">
              Github
            </a>
          </li>
          <li className="footer__social">
            <a className="footer__link" href="#">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
