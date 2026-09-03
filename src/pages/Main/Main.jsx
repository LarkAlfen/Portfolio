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
        </div>
      </section>
    </main>
  )
}