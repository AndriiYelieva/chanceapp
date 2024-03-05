import i18next from "i18next"
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import "./buttonLanguage.scss"

type Props = {
  localLanguage: string;
  language: string;
}

export const ButtonLanguage: React.FC<Props> = ({ localLanguage, language }) => {
  const { i18n } = useTranslation();
  const isCurrentLanguage = i18n.language === localLanguage;

  return (
    <button
      className={classNames("language__button", {
        "language__active": isCurrentLanguage
      })}
      type="button"
      disabled={isCurrentLanguage}
      onClick={() => i18next.changeLanguage(localLanguage)}
    >
      {language}
    </button>
  )
}