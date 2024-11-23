import Styles from "./Card.module.css";

export const Card = (props) => {
  // Функция для копирования ссылки в буфер обмена
  const copyToClipboard = () => {
    const url = props.link; // Получаем ссылку из props
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        alert("Ссылка скопирована в буфер обмена!");
      }).catch((err) => {
        console.error("Не удалось скопировать текст: ", err);
      });
    } else {
      // Фоллбек для старых браузеров
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Ссылка скопирована в буфер обмена!");
    }
  };

  // Парсим рейтинг и количество отзывов из props
  const rating = parseFloat(props.rating.replace(",", "."));
  const feenbackCount = parseInt(props.feenback.match(/\d+/)[0]);

  // Логика определения текста и стиля для блока
  let appraisalText = "Высокий рейтинг доверия";
  let appraisalStyle = {
    backgroundColor: "rgba(216, 240, 222, 1)", // Зеленый фон по умолчанию
    color: "rgba(58, 178, 91, 1)" // Зеленый текст по умолчанию
  };

  if (rating <= 2) {
    appraisalText = "Много негативных отзывов";
    appraisalStyle = {
      backgroundColor: "rgba(249, 218, 218, 1)", // Красный фон
      color: "rgba(225, 71, 71, 1)" // Красный текст
    };
  } else if (rating > 2 && feenbackCount < 100) {
    appraisalText = "Мало отзывов";
    appraisalStyle = {
      backgroundColor: "rgba(255, 247, 204, 1)", // Желтый фон
      color: "rgba(225, 189, 0, 1)" // Желтый текст
    };
  }

  return (
    <article className={Styles["card"]}>
      <div className={Styles["card__appraisal"]} style={appraisalStyle}>
        <p>{appraisalText}</p>
      </div>
      <div className={Styles["card__content-block"]}>
        <div className={Styles["card__block-container"]}>
          <img src={props.image} alt="" className={Styles["card__image"]} />
          <div className={Styles["card__text-container"]}>
            <h1 className={Styles["card__title"]}>{props.title}</h1>
            <div className={Styles["card__feedback-container"]}>
              <p className={Styles["card__rating"]}>
                <span className={Styles["card__star"]}>⭐</span> {props.rating}
              </p>
              <p className={Styles["card__feenback"]}>{props.feenback}</p>
            </div>
          </div>
        </div>
        <div className={Styles["card__info-container"]}>
          <p className={Styles["card__votes"]}>
            Город: <span className={Styles["card__accent"]}>{props.city}</span>
          </p>
          <p className={Styles["card__votes"]}>
            Адрес: <span className={Styles["card__accent"]}>{props.address}</span>
          </p>
          <p className={Styles["card__votes"]}>
            Телефон: <span className={Styles["card__accent"]}>{props.phone}</span>
          </p>
          <p className={Styles["card__votes"]}>
            Сайт: <span className={Styles["card__accent"]}>{props.site}</span>
          </p>
        </div>
        <div className={Styles["card__button-container"]}>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className={`button ${Styles["about__vote-button"]}`}>
            Подробнее
          </a>
          
          <button
            onClick={copyToClipboard}
            className={`button ${Styles["about__vote-button"]} ${Styles["about__vote-img"]}`}
          >
            <img
              src="/images/copy.svg"
              alt="Copy"
              className={Styles["card__image"]}
            />
          </button>
        </div>
      </div>
    </article>
  );
};
