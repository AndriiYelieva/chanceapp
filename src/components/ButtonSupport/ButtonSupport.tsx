import { Link } from "react-router-dom"

import { Size } from "../../Types/Size"
import { scrollToTop } from "../../helper/ScrollToTop.js"
import "./buttonSupport.scss"

type Props = {
  size: string,
}

export const ButtonSupport: React.FC<Props> = ({ size }) => {
  return (
    <>
      {size === Size.Small ? (
        <Link
          to="/chance-app/donate"
          className="button button__support"
          onClick={scrollToTop}
        >
          зробити внесок
        </Link>
      ) : size === Size.Medium ? (
        (
          <Link
          to="/chance-app/donate"
          className="button__medium button__support"
          onClick={scrollToTop}
        >
          зробити внесок
        </Link>
        )) : (
        (
          <Link
          to="/chance-app/donate"
          className="button__large button__support"
          onClick={scrollToTop}
        >
          зробити внесок
        </Link>
        ))}
    </>
  )
}