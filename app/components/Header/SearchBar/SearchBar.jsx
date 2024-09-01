'use client';

import React, { useState } from 'react';
import Styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Обновляем локальное состояние
  };

  const handleSearch = () => {
    onSearch(inputValue); // Вызываем переданную функцию поиска
  };

  return (
    <div className={Styles['search']}>
      <input
        className={Styles['search__field']}
        type="text"
        placeholder="Поиск по автосалонам"
        value={inputValue}
        onChange={handleInputChange} // Добавляем обработчик изменений
      />
      <img 
        src="/images/search.svg" 
        alt="Search" 
        className={Styles['search__image']}
        onClick={handleSearch} // Обработчик клика по лупе
      />
    </div>
  );
};

export default SearchBar;
