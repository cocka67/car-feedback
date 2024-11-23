"use client";

import Styles from "./Footer.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={Styles["footer"]}>
      <div className={`container ${Styles['footer__container']}`}>
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
        <nav className={Styles["menu"]}>
          <ul className={Styles["menu__list"]}>
            <li className={Styles["menu__item"]}>
              <Link
                href="/popular"
                className={`${Styles["menu__link"]} ${pathname === "/popular" && Styles["menu__link_active"]
                  }`}>
                Отзывы
              </Link>
            </li>
            <li className={Styles["menu__item"]}>
              <Link
                href="/shooters"
                className={`${Styles["menu__link"]} ${pathname === "/shooters" && Styles["menu__link_active"]
                  }`}>
                Обратная связь
              </Link>
            </li>
            <li className={Styles["menu__item"]}>
              <Link
                href="/runners"
                className={`${Styles["menu__link"]} ${pathname === "/runners" && Styles["menu__link_active"]
                  }`}>
                Правила
              </Link>
            </li>
          </ul>
        </nav>
        <div className={Styles["menu__button"]}>
          <a href="#" className={`button ${Styles["about__button-image"]}`}>
            <img
              src='/images/arrow.svg'
              alt='стрелка' />
          </a>
        </div>
      </div>
      <div className={`container ${Styles['menu__text']}`}>
        <p className={Styles["last-update"]}>© 2024 Авто отзыв. Все права защищены.</p>
      </div>

    </footer>
  );
};
