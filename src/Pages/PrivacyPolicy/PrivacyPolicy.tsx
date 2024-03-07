import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './privacyPolicy.scss';

import { Footer } from "../../components/Footer";
import { Header } from '../../components/Header';
import { scrollToTop } from '../../helper/ScrollToTop.js';
import { listPermits } from '../../Types/Navigation copy';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const listText: string[] = t("listText", { returnObjects: true});
  const listPermits: listPermits[] = t("listPermits", { returnObjects: true});

  return (
    <>
      <Header />
      <section className="privacy">
        <div className="privacy__wrapper">
          <Link
            to="/"
            className="privacy privacy__button"
            onClick={scrollToTop}
          >
            {t("return to the main page")}
          </Link>

          <div className="privacy__content">
            <h3 className="privacy__headline">
              {t("privacyPolicy")}
            </h3>
            <ul className="privacy__list">
              <p className="privacy__list--text">
                {t("theAdministration")} 
                <Link to="https://commission.europa.eu/law/law-topic/data-protection_en" target="_blank" className="privacy__list--link">
                  {t("generalDataProtection")}
                </Link>
                {t("We collect personal data")}
              </p>
              {listText.map(item => (
                <li className="privacy__list--item" key={item}>{item}</li>
              ))}
            </ul>

            {listPermits.map(permits => (
              <div className="privacy__permits" key={permits.title}>
                <h3 className="privacy__permits--title">
                  {permits.title}
                </h3>

                <p className="privacy__permits--description">
                  {permits.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}