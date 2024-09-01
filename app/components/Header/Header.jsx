"use client";
import Styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";

export const Header = ({ onSearch }) => { // Добавляем пропс onSearch для передачи функции поиска
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={Styles["header"]}>
      <div className={`container ${Styles["header__container"]}`}>
        {pathname === "/" ? (
          <span className={Styles["logo"]}>
            <img
              className={Styles["logo__image"]}
              src="/images/logo.svg"
              alt="Логотип Pindie"
            />
          </span>
        ) : (
          <Link href="/" className={Styles["logo"]}>
            <img
              className={Styles["logo__image"]}
              src="/images/logo.svg"
              alt="Логотип Pindie"
            />
          </Link>
        )}
        <input
          className={Styles["checkbox"]}
          type="checkbox"
          id="menuToggle"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <div className={Styles["hamburger-lines"]} onClick={toggleMenu}>
          <span className={`${Styles["line"]} ${Styles["line1"]}`}></span>
          <span className={`${Styles["line"]} ${Styles["line2"]}`}></span>
          <span className={`${Styles["line"]} ${Styles["line3"]}`}></span>
        </div>

        <nav className={`${Styles["menu"]} ${menuOpen ? Styles["menu-open"] : ""}`}>
          <ul className={Styles["menu__list"]}>
            <li className={Styles["menu__item"]}>
              <Link
                href="/new"
                className={`${Styles["menu__link"]} ${pathname === "/new" && Styles["menu__link_active"]}`}
              >
                Главная
              </Link>
            </li>
            <li className={Styles["menu__item"]}>
              <Link
                href="/popular"
                className={`${Styles["menu__link"]} ${pathname === "/popular" && Styles["menu__link_active"]}`}
              >
                Отзывы
              </Link>
            </li>
            <li className={Styles["menu__item"]}>
              <Link
                href="/shooters"
                className={`${Styles["menu__link"]} ${pathname === "/shooters" && Styles["menu__link_active"]}`}
              >
                Обратная связь
              </Link>
            </li>
            <li className={Styles["menu__item"]}>
              <Link
                href="/runners"
                className={`${Styles["menu__link"]} ${pathname === "/runners" && Styles["menu__link_active"]}`}
              >
                Правила
              </Link>
            </li>
          </ul>
        </nav>
        <SearchBar onSearch={onSearch} /> {/* Передаем функцию onSearch */}
      </div>
    </header>
  );
};
