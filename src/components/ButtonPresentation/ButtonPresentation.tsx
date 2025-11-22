import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Size } from "../../Types/Size"
import "./buttonPresentation.scss"

type Props = {
  size: string,
}

const PRESENTATION = "https://docs.google.com/presentation/d/15ILv28ILhuL8ng5TjiTDBk4Wiw50ftaq/"

export const ButtonPresentation: React.FC<Props> = ({ size }) => {
  const { t } = useTranslation();

  return (
    <>
      {size === Size.Small ? (
        <Link
          to={PRESENTATION}
          className="presentation presentation__button"
          target="_blank"
        >
          {t("downloadPresentation")}
        </Link>
      ) : size === Size.Medium ? (
        (
          <Link
            to={PRESENTATION}
            className="presentation__medium presentation__button"
            target="_blank"
          >
            {t("downloadPresentation")}
          </Link>
        )) : (
        (
          <Link
            to={PRESENTATION}
            className="presentation__large presentation__button"
            target="_blank"
          >
            {t("downloadPresentation")}
          </Link>
        ))}
    </>
  )
}