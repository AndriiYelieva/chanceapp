import { useTranslation } from 'react-i18next';

import about from "../../img/png/abou-people-desktop.png";
import { ForWhom } from '../../Types/ForWhom';
import './aboutPeople.scss';

export const AboutPeople = () => {
  const { t } = useTranslation();
  const forWhom: ForWhom[] = t("forWhom", { returnObjects: true });

  return (
    <section
      className="people"
      id="about-people"
    >
      <img
        className="people__img"
        src={about}
        alt="About the people"
      />

      <div className="people__wrapper">
        <div className="people__description">
          <div className="people__description--wrapper">
            <p className="people__description--this">{t("It’s")}</p>
            <p className="people__description--people">{t("about humans")}</p>
          </div>
          <p className="people__description--life">{t("and their lives")}</p>

          <p className="people__description--title">
            {t("chance is for everyone")}
            <br />
            <br />
            {t("our inspiration is people")}
          </p>

        </div>

        <div className="people__container">
          {forWhom.map(card => {
            const inlineStyle = {
              top: card.position.top,
              left: card.position?.left,
              right: card.position?.right,
            }
            return (
              <div
                className="people__container--card"
                style={inlineStyle}
                key={card.id}
              >
                <img
                  className="people__container--photo"
                  src={card.photo}
                  alt={card.name}
                />
                <p className="people__container--text">{card.description}</p>
              </div>
            )
          })}

        </div>
      </div>
    </section >
  );
}