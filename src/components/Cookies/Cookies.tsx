import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { hideCookies } from '../../redux/features/cookiesSlice';
import { scrollToTop } from '../../helper/ScrollToTop.js';
import cookie from "../../img/cookie.svg"
import gingerbread from "../../img/gingerbread.svg"
import './cookies.scss';

export const Cookies = () => {
  const dispatch = useAppDispatch();
  const isShowCookies = useAppSelector(state => state.cookies.showCookies)
  const { t } = useTranslation();

  const hadleHideCookies = () => {
    dispatch(hideCookies())
  }

  return (
    <>
      {isShowCookies && (
        <div className="cookies">

          <div className="cookies__images">
            <img
              src={cookie}
              alt="cookie"
            />
            <img
              src={gingerbread}
              alt="gingerbread"
            />
          </div>
          <p className="cookies__title">
          {t("cookies")}
          </p>
          <div className="cookies__buttons">
            <Link
              to="/chance-app/privacy-policy"
              className="cookies__button cookies__button--more"
              onClick={() => {
                hadleHideCookies()
                scrollToTop()
              }}
            >
              {t("cookiesMore")}
            </Link>
            <button
              type="button"
              className="cookies__button cookies__button--close"
              onClick={() => hadleHideCookies()}
            >
              {t("cookiesClose")}
            </button>
          </div>
        </div>
      )}
    </>
  )
}