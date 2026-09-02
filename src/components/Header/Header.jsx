import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Header.scss";

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < previousScroll) {
        // On remonte
        setVisible(true);
      } else if (currentScroll > previousScroll) {
        // On descend
        setVisible(false);
      }

      // Toujours afficher le header en haut de page
      if (currentScroll < 50) {
        setVisible(true);
      }

      previousScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${visible ? "header--visible" : "header--hidden"}`}
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
          className={`theme-switch ${
            darkMode ? "theme-switch--dark" : ""
          }`}
          onClick={toggleDarkMode}
          aria-label={
            darkMode
              ? "Activer le mode clair"
              : "Activer le mode sombre"
          }
          aria-pressed={darkMode}
        >
          <span className="theme-switch__thumb" />
        </button>

      </div>
    </header>
  );
}