"use client";
import React, { memo } from "react";
import Link from "next/link";
import s from "./Header.module.scss";

export const Header = memo(() => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleClick = () => setMenuIsOpen((prev) => !prev);

  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Link href="/">Suri</Link>
      </div>
      <nav className={`${s.header__nav}`}>
        <div className={s.header__burger}>
          <button onClick={handleClick}>
            <span></span>
          </button>
        </div>
        <ul className={`list-reset ${menuIsOpen && `${s.active}`}`}>
          <li>
            <Link onClick={handleClick} href={"/#comics"}>
              About me
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={"/#media-literacy"}>
              Media-literacy
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={"/#solutions"}>
              Solutions
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={"/debunk-fake"}>
              Debunk a fake
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={"/quiz"}>
              Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
