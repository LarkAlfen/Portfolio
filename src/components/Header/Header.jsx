import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import moonIcon from "../../assets/moon.png"
import sunIcon from "../../assets/sun.png"
import "./Header.scss";

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready")
    })
  }, [])


  return (
    <header
      className={`header`}
    >
      <div className="header__container">

        <a href="#" className="header__logo">
          <span className="header__logo__letter">A</span>
          <span className="header__logo__letter">T</span>
        </a>

        <nav className="header__nav" aria-label="Navigation principale">

          <a href="#projects" className="header__link">
            Projets
          </a>

          <a href="#about" className="header__link">
            À propos
          </a>

          <a href="#contact" className="header__link">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className={`theme-switch ${darkMode ? "theme-switch--dark" : ""
            }`}
          onClick={toggleDarkMode}
          aria-label={
            darkMode
              ? "Activer le mode clair"
              : "Activer le mode sombre"
          }
          aria-pressed={darkMode}
        >
          <span className="theme-switch__thumb" >
            <img
              src={darkMode ? moonIcon : sunIcon}
              alt=""
              className="theme-switch__icon"
            />
          </span>

        </button>

      </div>
    </header>
  );
}