import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import powerInPeople from "../../img/png/footer-power.png";
import qrCode from "../../img/qr-code-mobile.svg";
import { socialNetworks } from '../../constants/social';
import { scrollToTop } from '../../helper/ScrollToTop.js';
import { DownloadTheApp } from '../../constants/presentation';
import { Navigation } from '../../Types/Navigation';
import { InfoFooter } from '../../Types/InfoFooter';
import './footer.scss';

export const Footer = () => {
  const { t } = useTranslation();
  const navigationLinks: Navigation[] = t("navigation", { returnObjects: true });
  const infoFooter: InfoFooter[] = t("infoFooter", { returnObjects: true });

  return (
    <footer className="footer" id="contacts">
      <div className="footer__wrapper">
        <div className="footer__info">
          <div className="footer__head">
            <h3 className="footer__head--title">chance</h3>
            <p className="footer__head--description">{t("application for people")}</p>
          </div>

          <div className="footer__contacts">
            <div
              className="footer__contacts--email"
            >
              <Link
                to="mailto:chanceapp4@gmail.com"
                target="_blank"
              >
                chanceapp4@gmail.com
              </Link>
              <p className="footer__contacts--description">{t("answer all your questions")}</p>
            </div>

            <div className="footer__contacts--links">
              {socialNetworks.map(social => (
                <Link
                  to={social.link}
                  className={`footer__contacts--link  footer__contacts--${social.name}`}
                  target="_blank"
                  key={social.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="footer__menu">
          <h5 className="footer__menu--title">
            {t("chance app is a non-profit project")}
          </h5>

          <ul className="footer__menu--list">
            {navigationLinks.map(element => (
              element.link === "/donate" ? (
                <Link
                  to={element.link}
                  className="footer__menu--link"
                  key={element.title}
                  onClick={scrollToTop}
                >
                  {element.title}
                </Link>
              ) : (
                <a
                  href={element.link}
                  className="footer__menu--link"
                  key={element.title}
                >
                  {element.title}
                </a>
              )
            ))}
          </ul>
        </div>

        <div className="footer__download">
          <p className="footer__download--text">
            {t("download the app")}
          </p>

          <Link
            to={DownloadTheApp.link}
            target="_blank"
            className="footer__download--qr"
          >
            <img
              src={qrCode}
              alt="QR Code"
            />
          </Link>
        </div>
      </div>

      <div className="footer__down">
        <div className="footer__down--wrapper">

          {infoFooter.map(element => (
            element.link === null ? (
              <p className="footer__down--link" key={element.title}>
                {element.title}
              </p>
            ) : (
              <Link
                to={element?.link}
                className={classNames("footer__down--link", {
                  "footer__down--developed": element.title === "дизайн від @yasdubin",
                })}
                key={element.title}
                onClick={scrollToTop}
              >
                {element.title}
              </Link>
            )
          ))}
        </div>
      </div>

      <img
        className="footer__power"
        src={powerInPeople}
        alt="power in people"
      />
    </footer >
  );
}