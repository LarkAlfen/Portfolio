import "./Main.scss"

export function Main() {
  return (
    <main className="main" id="home">
      <section className="hero">
        <div className="hero__intro-layout">
          <div className="hero__heading">
            <h1 className="hero__title">
              <span>Front-End</span>
              <span>Developer</span>
            </h1>
          </div>

          <div className="hero__intro-content">
            <p className="hero__description">
              Je conçois des interfaces web modernes, accessibles et agréables à
              utiliser, avec une attention particulière portée aux détails.
            </p>

            <a href="#projects" className="hero__projects">
              <span>Mes projets →</span>
            </a>
          </div>
        </div>

        <div className="hero__skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>SCSS</span>
          <span>UI / UX</span>
        </div>

        <div className="hero__showcase">
          <div className="hero__side-card hero__side-card--left">
            <span className="hero__side-label">
              Expérience
            </span>

            <strong>
              7+
            </strong>

            <p>
              années dans le développement front-end
            </p>
          </div>

          <article className="hero__profile">
            <div className="hero__profile-photo">
              <img
                src="/images/profile.jpg"
                alt="Portrait d'Allan"
              />
            </div>

            <div className="hero__profile-content">
              <span className="hero__profile-label">
                À propos
              </span>

              <h2>
                Allan,
                <br />
                développeur front-end
              </h2>

              <p>
                J'aime transformer des idées en expériences web simples,
                intuitives et soignées.
              </p>

              <a href="#about" className="hero__profile-link">
                En savoir plus

                <span>
                  →
                </span>
              </a>
            </div>
          </article>

          <div className="hero__side-card hero__side-card--right">
            <span className="hero__side-label">
              Actuellement
            </span>

            <strong>
              Disponible
            </strong>

            <p>
              pour de nouvelles opportunités
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}