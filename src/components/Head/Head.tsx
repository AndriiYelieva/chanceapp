import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './head.scss';
import { Size } from '../../Types/Size';
// import { ButtonSupport } from '../ButtonSupport';
import { ButtonPresentation } from '../ButtonPresentation';
import man from "../../img/png/headerMan.png";
import mate from "../../img/partner-Mate.svg";
import baza from "../../img/partner-Baza.svg";
import qrCode from "../../img/qr-code-head.svg";
import { socialNetworks } from '../../constants/social';
import { PRESENTATION } from '../../constants/presentation';
const bazaLink = "https://baza-trainee.tech/ua";
const mateLink = "https://mate.academy";

export const Head = () => {
  const { t } = useTranslation();

  return (
    <section className="head">
      <div className="head__wrapper">
        <img
          src={man}
          alt="man"
          className="head__heading--man"
        />
        <h3 className="head__heading--change">{t("creating changes")}</h3>
        <h1 className="head__heading--people">{t("in people’s lives")}</h1>
        <p className="head__heading--all">{t('For everyone in need')}</p>
        
        <div className="head__heading--buttons">
          {/* <ButtonSupport size={Size.Medium} /> */}
          <ButtonPresentation size={Size.Medium} />
        </div>

        <div className="head__partners">
          <div className="head__partners--partner">{t("supported by")}</div>
          <div className="head__partners--companies">
            <Link
              to={bazaLink}
              target="_blank"
            >
              <img
                src={baza}
                alt="Baza Traine Ukraine"
                className="head__partners--baza"
              />
            </Link>
            <Link
              to={mateLink}
              target="_blank"
            >
              <img
                src={mate}
                alt="Mate Academy"
                className="head__partners--mate"
              />
            </Link>
          </div>
        </div>

        <div className="head__contacts">
          {socialNetworks.map(social => (
            <Link
              to={social.link}
              className={`head__contacts--link  head__contacts--${social.name}`}
              target="_blank"
              key={social.name}
            />
          ))}
        </div>

        <div className="head__code">
          <Link
            to={PRESENTATION.link}
            target="_blank"
            className="head__code--qr"
          >
            <img
              src={qrCode}
              alt="QR Code"
              className="head__code--image"
            />
            <p className="head__code--title">
              {t("application presentation")}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}