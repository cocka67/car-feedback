import React from 'react';
import Styles from './RatingCarDealers.module.css';
import { data } from '../../data/data'; // Подкорректируйте путь в соответствии с вашей структурой проекта

export const RatingCarDealers = () => {
  // Сортируем данные по рейтингу в порядке убывания
  const sortedData = [...data].sort((a, b) => {
    // Сначала сортируем по рейтингу, если рейтинг одинаковый, сортируем по количеству отзывов
    const ratingDiff = parseFloat(b.rating) - parseFloat(a.rating);
    if (ratingDiff !== 0) {
      return ratingDiff;
    }
    // Если рейтинги равны, сортируем по количеству отзывов в порядке убывания
    return parseInt(b.feenback) - parseInt(a.feenback);
  });

  const topThree = sortedData.slice(0, 3);

  return (
    <article className={Styles["rating__card"]}>
      <div className={Styles["rating__card-container"]}>
      <h2>Рейтинг автосалонов</h2>
        {topThree.map((item, index) => (
          <article key={item.id} className={Styles["card"]}>
            <p className={Styles["card__place"]}>{index + 1} место</p>
            <div className={Styles["card__content-container"]}>
              <img src={item.image} alt={item.title} className={Styles["card__image"]} />
              <div className={Styles["card__content-block"]}>
                <div>
                  <h3 className={Styles["card__title"]}>{item.title}</h3>
                  <p className={Styles["card__rating"]}>{item.feenback}</p>
                </div>
                <p className={Styles["card__rating"]}>
                  <span className={Styles["card__star"]}>⭐</span> {item.rating}
                </p>

              </div>
            </div>
          </article>
        ))}
        <p className={Styles["last-update"]}>Последнее обновление информации: 22.01.2024 г.</p>
      </div>
      <img src='/images/Реклама.png' alt='' className={Styles["card__image-ad"]} />
    </article>
  );
};

export default RatingCarDealers;
