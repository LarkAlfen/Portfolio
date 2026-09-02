import "./Header.scss"
import { useTheme } from "../../context/ThemeContext";

export function Header() {
  const {darkMode, toggleDarkMode } = useTheme()

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <span>AT</span>
        </a>

        <nav className="header__nav" aria-label="Navigation principale">
          <a href="#" className="header__link">
            Accueil
          </a>

          <a href="#projets" className="header__link">
            Projets
          </a>

          <a href="#a-propos" className="header__link">
            À propos
          </a>

          <a href="#contact" className="header__link">
            Contact
          </a>
        </nav>
        <button 
        type="button" 
        className={`theme-switch ${darkMode ? "theme-switch--dark" : ""}`} 
        onClick={toggleDarkMode} 
        aria-label={ darkMode ? "Activer le mode clair" : "Activer le mode sombre" } aria-pressed={darkMode} 
        >
          <span className="theme-switch__thumb" />
        </button>      
      </div>
    </header>
  );
}