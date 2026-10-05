import "./Main.scss"

export function Main() {
  return (
    <main className="main section" id="main">
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

        <div className="hero__showcase">


          <article className="hero__profile">
            <div className="hero__profile-photo">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="Portrait d'Allan"
              />
            </div>

            <div className="hero__profile-content">
              <div className="hero__profile-text">
                <h2>
                  Allan,
                </h2>

                <p>
                  Développeur Front-end avec 7 ans d'expérience, passionné par le web et le digital, j'aime apprendre et développer mes compétences dans le domaine du web.
                </p>
              </div>

              <a href="#about" className="hero__profile-link">
                En savoir plus
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}