import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import { ButtonSupport } from '../ButtonSupport';
// import { Size } from '../../Types/Size';
import { Menu } from '../Menu';
import { scrollToTop } from '../../helper/ScrollToTop.js';
import { ButtonLanguage } from '../ButtonLanguage';
import { LANGUAGES } from '../../Types/Languages';
import { LOCALS } from "../../i18n/constants";
import { Navigation } from '../../Types/Navigation';
import './header.scss';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  // const [isShowSubHeader, setIsShowSubHeader] = useState(true);
  const { t } = useTranslation();
  const navigationLinks: Navigation[] = t("navigation", { returnObjects: true });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  if (menuVisible === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // const handleHideSubHeader = () => {
  //   dispatch(hideSubHeader())
  // }

  return (
    <header className="header">
      {/* {isShowSubHeader && (
        <div className="header__subheader">
          <p className="header__subheader--text">
            ваша підтримка значить дуже багато — допоможіть нашому проєкту розвиватись
          </p>
          <button
            type="button"
            className="header__subheader--button"
            onClick={() => setIsShowSubHeader(false)} />
          <div
            className="header__subheader--click"
          >
            клац
          </div>
        </div>
      )} */}
      <nav className="header__nav">
        <div className="header__nav--links">
          <Link
            className="header__logo"
            to="/chance-app/"
            onClick={() => {
              setMenuVisible(false)
              scrollToTop()
            }}
          />
          {navigationLinks.map(({ link, title }) => (
            <a
              href={link}
              className="header__nav--link"
              key={title}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="header__wrapper">
          <div className="header__language">
            <ButtonLanguage localLanguage={LOCALS.uk} language={LANGUAGES.ukraine} />
            <ButtonLanguage localLanguage={LOCALS.en} language={LANGUAGES.english} />
          </div>
          {/* <ButtonSupport size={Size.Small} /> */}
          {!menuVisible ? (
            <button
              type="button"
              className="header__button--menu header__button"
              onClick={() => toggleMenu()}
            />
          ) : (
            <button
              type="button"
              className="header__button--close header__button"
              onClick={() => toggleMenu()}
            />
          )}
        </div>
      </nav>
      {menuVisible && (
        <Menu setMenuVisible={setMenuVisible} />
      )}
    </header>
  );
}