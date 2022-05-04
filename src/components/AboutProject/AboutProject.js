import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__progress">
        <div className="progress__section progress__section_active">
          <span className="progress__text progress__text_active">1 неделя</span>
        </div>
        <div className="progress__section">
          <span className="progress__text">4 недели</span>
        </div>
      </div>
      <ul className="about-project__knowleges">
        <li className="about-project__knowledge">Back-end</li>
        <li className="about-project__knowledge">Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
