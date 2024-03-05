import { useTranslation } from 'react-i18next';

import { Functions } from '../../Types/Functions';
import cheack from "../../img/check.svg";
import './openTheFunctions.scss';

export const OpenTheFunctions = () => {
  const { t } = useTranslation();

  const functions: Functions[] = t("functions", { returnObjects: true })

  return (
    <section className="functions" id="opportunity">
      <div className="functions__title">
        <h3 className="functions__title--functions">{t("open the features for")}</h3>
        <h1 className="functions__title--access">{t("access and comfort")}</h1>
        <p className="functions__title--horizons">{t("new horizons for everyone")}</p>
      </div>

      <ul className="functions__list">
        {functions.map(card => (
          <li className="functions__card" key={card.id}>
            <img
              className="functions__card--photo"
              src={card.photo}
              alt={card.name}
            />
            <div className="functions__card--wrapper">
              <h2 className="functions__card--name">{card.name}</h2>
              <p className="functions__card--description">{card.description}</p>

              <ul className="functions__card--items">
                {card.cheacks.map(item => (
                  <li className="functions__card--item" key={item}>
                    <img
                      className="functions__card--img"
                      src={cheack}
                      alt="cheack"
                    />
                    <p className="functions__card--cheack">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}