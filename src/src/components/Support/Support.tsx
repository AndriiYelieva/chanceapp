// import { Size } from '../../Types/Size';
// import { ButtonSupport } from '../ButtonSupport';
import { useTranslation } from 'react-i18next';

import photos from "../../img/png/photos-support.png";
import './support.scss';

export const Support = () => {
  const { t } = useTranslation();

  return (
    <section className="support">
      <div className="support__message">
        <h4 className="support__title">
          {t("we make the world")}
        </h4>
        <div className="support__wrapper">
          {t("people")}
          <img
            src={photos}
            alt="people"
            className="support__avatars"
          />
          {t("litle")}
        </div>
        <h4 className="support__title">
          {t("better")}
        </h4>

        {/* <p className="support__support">
          та ви можете підтримати нас
        </p>
  
        <ButtonSupport size={Size.Medium} /> */}
      </div>
    </section>
  );
}