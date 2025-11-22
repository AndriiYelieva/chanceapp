import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components/Header';
import { scrollToTop } from '../../helper/ScrollToTop.js';
import './notFound.scss';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="notFound">
        <h1 className="notFound__h1">
          {t("page not found")}
        </h1>

        <Link
          to="/chance-app/"
          className="notFound__button"
          onClick={scrollToTop}
        >
          {t("return to the main page")}
        </Link>
      </section>
    </>
  );
};
