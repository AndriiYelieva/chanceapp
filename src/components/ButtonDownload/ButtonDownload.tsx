import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Size } from "../../Types/Size"
import "./buttonDownload.scss"
import { DOWNLOAD } from "../../constants/download"

type Props = {
  size: string,
}

export const ButtonDownload: React.FC<Props> = ({ size }) => {
  const { t } = useTranslation();

  return (
    <>
      {size === Size.Small ? (
        <Link
          to={DOWNLOAD.link}
          className="presentation presentation__button"
          target="_blank"
        >
          {t("download the app")}
        </Link>
      ) : size === Size.Medium ? (
        (
          <Link
            to={DOWNLOAD.link}
            className="presentation__medium presentation__button"
            target="_blank"
          >
            {t("download the app")}
          </Link>
        )) : (
        (
          <Link
            to={DOWNLOAD.link}
            className="presentation__large presentation__button"
            target="_blank"
          >
            {t("download the app")}
          </Link>
        ))}
    </>
  )
}