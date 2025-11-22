import React, { useState } from 'react'
import './donate.scss';

import { Footer } from "../../components/Footer";
import { Header } from '../../components/Header';
import { ButtonSupport } from '../../components/ButtonSupport';
import { Size } from '../../Types/Size';
import { Tab } from '../../Types/Tab';
import { Link } from 'react-router-dom';
import { Currency } from '../../Types/Currency';

import donate from '../../img/png/donate.png'

export const Donate = () => {
  const [, setSelectTab] = useState(Tab.Once);
  const [currentSum, setCurrentSum] = useState<number>(0)

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Number(event.target.value);

    setCurrentSum(isNaN(value) ? 0 : value);
  };

  return (
    <>
      <Header />
      <section className="donate">
        <div className="donate__wrapper">
          <h3 className="donate__title">
            підтримати
          </h3>

          <div className="donate__tabs">
            <button
              type="button"
              className="donate__tabs--once"
              onClick={() => setSelectTab(Tab.Once)}
            >
              разово
            </button>
            <button
              type="button"
              className="donate__tabs--monthly"
              onClick={() => setSelectTab(Tab.Monthly)}
            >
              щомісячно
            </button>
          </div>

          <div className="donate__sum">
            <div className="donate__sum--wrapper">
              <input
                type="number"
                name="summary"
                onChange={handleInputChange}
                value={currentSum}
                // placeholder={currentSum.toString()}
                className="donate__sum--number"
              />
              <select
                // value={selectedValueSortNumber}
                // onChange={handleChangeSortNumber}
                className="donate__sum--select"
              >
                <option value={Currency.UAH}>{Currency.UAH}</option>
                <option value={Currency.USD}>{Currency.USD}</option>
                <option value={Currency.EUR}>{Currency.EUR}</option>
              </select>
            </div>


            <div className="donate__sum--buttons">
              <button
                type="button"
                className="donate__sum--button"
                onClick={() => 1}
              >
                +50
              </button>
              <button
                type="button"
                className="donate__sum--button"
                onClick={() => 1}
              >
                +100
              </button>
              <button
                type="button"
                className="donate__sum--button"
                onClick={() => 1}
              >
                +200
              </button>
              <button
                type="button"
                className="donate__sum--button"
                onClick={() => 1}
              >
                +500
              </button>
              <button
                type="button"
                className="donate__sum--button"
                onClick={() => 1}
              >
                +1000
              </button>
            </div>
          </div>

          <div className="donate__info">
            <div className="donate__info--inputs">
              <input
                type="text"
                placeholder="Ім’я*"
                className="donate__info--input"
              />

              <input
                type="text"
                placeholder="Прізвище*"
                className="donate__info--input"
              />

              <input
                type="email"
                placeholder="Електронна пошта*"
                className="donate__info--input"
              />
            </div>

            <label
              htmlFor="rules"
              className="donate__info--label"
            >
              <input
                type="checkbox"
                name="rules"
                id="rules"
                className="donate__info--checkbox"
              />
              <p className="donate__info--title">Підтверджую, що згоден(-а)
                з <Link
                  to="/chance-app/privacy-policy"
                  className="donate__info--link"
                > Політикою конфіденційності
                </Link> та <Link
                  to="/chance-app/privacy-policy"
                  className="donate__info--link"
                > Умовами користування</Link></p>
            </label>
          </div>

          <ButtonSupport size={Size.Large} />
        </div>

        <div className="donate__image">
          <img
            src={donate}
            alt="donate" 
            className="donate__image--photo"
            />
        </div>

      </section>
      <Footer />
    </>
  );
}