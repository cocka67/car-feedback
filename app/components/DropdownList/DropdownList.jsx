import React from "react";
import Styles from "./DropdownList.module.css";

export const DropdownList = ({ onCityChange, onSortChange, selectedCity, sortType }) => {
  const cityLabel = selectedCity ? `Ваш город: ` : 'Выберите ';
  const cityHighlight = selectedCity ? selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1) : 'город';
  const sortLabel = sortType === 'rating' ? 'Сортировка ' : 'Сортировка ';
  const sortHighlight = sortType === 'rating' ? 'по рейтингу' : 'по популярности';

  return (
    <article className={Styles["dropdown"]}>
      {/* Блок выбора города */}
      <div className={Styles["dropdown__block"]}>
        <label className={Styles["dropdown__label"]} htmlFor="city-select">
          {cityLabel}
          <span className={Styles["highlight"]}>{cityHighlight}</span> {/* Подсвечиваем слово */}
        </label>
        <select className={Styles["dropdown__select"]} name="city" id="city-select" onChange={onCityChange}>
          <option className={Styles["dropdown__option"]} value=""></option>
          <option className={Styles["dropdown__option"]} value="Челябинск">Челябинск</option>
          <option className={Styles["dropdown__option"]} value="Москва">Москва</option>
          <option className={Styles["dropdown__option"]} value="Петрозаводск">Петрозаводск</option>
        </select>
      </div>
      
      {/* Блок сортировки */}
      <div className={`${Styles["dropdown__block"]} ${Styles["sort__block"]}`}>
        <label className={`${Styles["dropdown__label"]} ${Styles["sort__label"]}`} htmlFor="sort-select">
          {sortLabel}
          <span className={Styles["highlight"]}>{sortHighlight}</span> {/* Подсвечиваем слово */}
        </label>
        <select className={Styles["dropdown__select"]} name="rating" id="sort-select" onChange={onSortChange}>
          <option className={Styles["dropdown__option"]} value="popular">по популярности</option>
          <option className={Styles["dropdown__option"]} value="rating">по рейтингу</option>
        </select>
      </div>
    </article>
  );
};

