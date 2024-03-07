import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import andriiAvatar from "../../img/png/Andrii.png";
import { Roles } from '../../Types/Roles';
import 'swiper/css/pagination';
import 'swiper/css';
import './aboutUs.scss';

const linkToAndrii = "https://t.me/andrik3p0";

export const AboutUs = () => {
  const { t } = useTranslation();
  const Roles: Roles[] = t("roles", { returnObjects: true });

  return (
    <section className="about" id="about-us">
      <div className="about__wrapper">
        <div className="about__avatar">
          <img
            src={andriiAvatar}
            alt="Andrii"
          />
          <p className="about__avatar--description">{t("this is Andriy")}</p>
          <Link
            className="about__avatar--link"
            to={linkToAndrii}
            target="_blank"
          >
            {t("have a chat")}
          </Link>
        </div>
        <div className="about__text">
          <p className="about__text--socialisation">
            {t("socialisation")}
          </p>
          <p className="about__text--app">
            {t("we are creating")}
            <br />
            <br />
            {t("it is not just a tool")}
          </p>
        </div>
      </div>

      <ul className="about__list">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          className="about__swiper"
        >
          {Roles.map(element => (
            <SwiperSlide
              className="about__slide"
              key={element.id}
            >
              <img
                className="about__slide--photo"
                src={element.photo}
                alt={element.name}
              />
              <h2 className="about__slide--name">{element.name}</h2>
              <h2 className="about__slide--surname">{element.surname}</h2>

              <p className="about__slide--role">{element.role}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section >
  );
}