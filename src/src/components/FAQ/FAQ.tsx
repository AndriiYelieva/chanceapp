import { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import './faq.scss';
import { Faq } from '../../Types/Faq';

export const FAQ = () => {
  const { t } = useTranslation();
  const faq: Faq[] = t("faq", { returnObjects: true });
  
  const [isAnswers, setIsAnswers] = useState(faq);
  
  const handleShowAnswer = (index: number) => {
    const newAnswers = [...isAnswers];

    newAnswers[index].isShow = !newAnswers[index].isShow;
    setIsAnswers(newAnswers);
  }
  return (
    <section className="faq" id="faq">
      <h3 className="faq__answer">{t("answering the most")}</h3>
      <h1 className="faq__question">{t("asked questions")}</h1>

      <ul className="faq__list">
        {faq.map((element, index) => (
          <li
            className={classNames("faq__element", {
              "faq__element--isShow": element.isShow === true,
            })}
            key={element.id}
          >
            <div className="faq__wrapper">
              <h1 className="faq__element--title">{element.question}</h1>
              <button
                type="button"
                className={classNames("faq__button",
                  element.isShow === true ? "faq__button--active" : "faq__button--default"
                )}
                onClick={() => handleShowAnswer(index)}
              />
            </div>

            {isAnswers[index].isShow && (
              <span className="faq__element--description">
                {element.answer.split(/\s{3,}/).map(paragraph => (
                  <>
                    {paragraph}
                    <br />
                    <br />
                  </>
                ))}
              </span>
            )}
          </li>
        ))
        }
      </ul>

    </section>
  );
}