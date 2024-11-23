import React, { useState } from 'react';
import { Card } from '../Card/Card'; 
import { data } from '../../data/data'; 
import Styles from './CardsList.module.css';
import { RatingCarDealers } from "../RatingCarDealers/RatingCarDealers";
import { DropdownList } from "../DropdownList/DropdownList";
import { TextFeedbackBlock } from '../TextFeedbackBlock/TextFeedbackBlock'; 
import { Header } from '../Header/Header'; 

export const CardsList = () => {
  const [visibleData, setVisibleData] = useState(data.slice(0, 7)); 
  const [clickCount, setClickCount] = useState(0); 
  const [selectedCity, setSelectedCity] = useState(''); // Состояние для выбранного города
  const [sortType, setSortType] = useState('popular'); // Состояние для типа сортировки

  // Функция для обновления видимых данных
  const showMore = () => {
    if (clickCount < 1) { 
      const randomData = data.sort(() => 0.5 - Math.random()).slice(0, 7);
      setVisibleData(prevData => [...prevData, ...randomData]);
      setClickCount(clickCount + 1); 
    }
  };

  // Функция для поиска
  const handleSearch = (query) => {
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) 
    );
    setVisibleData(filteredData); 
  };

  // Функция для выбора города
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city); // Устанавливаем выбранный город
    if (city) {
      const filteredData = data.filter(item =>
        item.city.toLowerCase() === city.toLowerCase()
      );
      setVisibleData(filteredData);
    } else {
      setVisibleData(data.slice(0, 7)); // Сбрасываем на первоначальное состояние
    }
  };

  // Функция для сортировки
  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortType(sortValue); // Устанавливаем тип сортировки

    let sortedData = [...visibleData];
    if (sortValue === 'rating') {
      sortedData.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortValue === 'popular') {
      sortedData.sort((a, b) => parseInt(b.feenback.match(/\d+/)) - parseInt(a.feenback.match(/\d+/)));
    }
    setVisibleData(sortedData); 
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <TextFeedbackBlock />
      <section id='main' className={Styles["cards__list"]}>
        <div className={`container ${Styles['cards__container']}`}>
          <DropdownList onCityChange={handleCityChange} onSortChange={handleSortChange} selectedCity={selectedCity} sortType={sortType} />
          <div className={Styles["cards__list-conteiner"]}>
            {visibleData.map((item, index) => (
              <Card
                key={`${item.id}-${index}`}
                title={item.title}
                rating={item.rating}
                feenback={item.feenback}
                image={item.image}
                city={item.city}
                address={item.address}
                phone={item.phone}
                site={item.site}
                link={item.link}
              />
            ))}
          </div>
          <RatingCarDealers />
        </div>
        <div className={Styles["cards__button"]}>
          <button 
            onClick={showMore} 
            className={`button ${Styles["about__vote-button"]}`}
            disabled={clickCount >= 1}
          >
            Показать ещё
          </button>
        </div>
      </section>
    </>
  );
};
