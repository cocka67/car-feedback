import Styles from "./TextFeedbackBlock.module.css";

export const TextFeedbackBlock = () => {
  return (
    <section className={Styles['banner']}>
      <div className={`container ${Styles['banner__container']}`}>
        <h1 className={Styles['banner__title']}>
          Отзывы об автосалонах по всей России
        </h1>
        <div className={Styles['banner__text-block']}>
          <p className={Styles['banner__text']}>
            Мы собираем только реальные отзывы покупателей и
            посетителей автосалонов, чтобы поделиться ими с Вами!
            Надеемся, и Вы примите активное участие в обсуждениях,
            и не станете жертвой автообмана!
          </p>
        </div>
        <a href="#popular" className={`button ${Styles['banner__link']}`}>
          Найти отзывы об автосалоне
        </a>
      </div>
    </section>
  );
};
