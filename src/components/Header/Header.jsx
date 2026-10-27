import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "motion/react";
import moonIcon from "../../assets/moon.png"
import sunIcon from "../../assets/sun.png"
import "./Header.scss";


const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Header({ introFinished }) {
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
      <div

        className="header__container">

        <motion.a
          variants={fadeIn}
          initial="hidden"
          animate={introFinished ? "visible" : "hidden"}
          href="#" className="header__logo">
          <div className="header__logo__img"/>
        </motion.a>

        <motion.nav
          initial={{
            clipPath: "inset(100% 0 0 0)",
          }}
          animate={
            introFinished
              ? {
                clipPath: "inset(0% 0 0 0)",
              }
              : {
                clipPath: "inset(100% 0 0 0)",
              }
          }
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="header__nav" aria-label="Navigation principale">

          <a href="#projects" className="header__link">
            Projets
          </a>

          <a href="#about" className="header__link">
            À propos
          </a>

          <a href="#contact" className="header__link">
            Contact
          </a>
        </motion.nav>

        <motion.button
          variants={fadeIn}
          initial="hidden"
          animate={introFinished ? "visible" : "hidden"}
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

        </motion.button>

      </div>
    </header>
  );
}