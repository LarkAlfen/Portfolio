import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#accueil" className="header__logo">
          Allan
        </a>

        <nav className="header__nav" aria-label="Navigation principale">
          <a href="#accueil" className="header__link">
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
      </div>
    </header>
  );
}