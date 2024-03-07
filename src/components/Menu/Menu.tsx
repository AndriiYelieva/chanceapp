import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ButtonLanguage } from "../ButtonLanguage";
import { LOCALS } from "../../i18n/constants";
import { LANGUAGES } from "../../Types/Languages";
import { Navigation } from "../../Types/Navigation";
import './menu.scss';

type Props = {
  setMenuVisible: (v: boolean) => void;
}

const FACEBOOK = "https://www.facebook.com/profile.php?id=61554881159420"
const INSTAGRAM = "https://www.instagram.com/chance_appp?igsh=cDUycTJ6djltaTQ3"
const TIKTOK = "https://www.tiktok.com/@chance_app?_t=8ivF0N64uY9&_r=1"

export const Menu: React.FC<Props> = ({ setMenuVisible }) => {
  const { t } = useTranslation();
  const navigationLinks: Navigation[] = t("navigation", { returnObjects: true });

  const handleToLink = () => {
    setMenuVisible(false);
  }

  return (
    <nav className="menu">
      <ul className="menu__list">
        {navigationLinks.map(element => (
          <a
            href={element.link}
            className="menu__link"
            key={element.title}
            onClick={() => handleToLink()}
          >
            {element.title}
          </a>
        ))}
      </ul>

      <div className="menu__language">
        <ButtonLanguage localLanguage={LOCALS.uk} language={LANGUAGES.ukraine}/>
        <ButtonLanguage localLanguage={LOCALS.en} language={LANGUAGES.english}/>
      </div>

      <div className="menu__contacts">
        <div
          className="menu__contacts--email"
        >
          <Link
            to="mailto:chanceapp4@gmail.com"
            target="_blank"
          >
            chanceapp4@gmail.com
          </Link>

          <p className="menu__contacts--description">{t("answer all your questions")}</p>
        </div>

        <div className="menu__contacts--links">
          <Link
            to={FACEBOOK}
            className="menu__contacts--link menu__contacts--facebook"
            target="_blank"
          />
          <Link
            to={INSTAGRAM}
            className="menu__contacts--link menu__contacts--instagram"
            target="_blank"
          />
          <Link
            to={TIKTOK}
            className="menu__contacts--link menu__contacts--tiktok"
            target="_blank"
          />
        </div>
      </div>
    </nav>
  );
}