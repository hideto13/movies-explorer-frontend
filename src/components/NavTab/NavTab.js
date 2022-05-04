import "./NavTab.css";

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <a className="navtab__link" href="#about-project">
          О проекте
        </a>
      </li>
      <li className="navtab__item">
        <a className="navtab__link" href="#techs">
          Технологии
        </a>
      </li>
      <li className="navtab__item">
        <a className="navtab__link" href="#about-me">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
