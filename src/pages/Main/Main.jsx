import "./Main.scss"
import { motion } from "motion/react";


export function Main({ introFinished }) {
  return (
    <main className="main section" id="main">
      <section className="hero">
        <div className="hero__intro-layout">
          <div className="hero__heading">
            <h1 className="hero__title">
              <motion.span
                initial={{
                  x: "10%",
                  opacity: 0,
                }}
                animate={
                  introFinished
                    ? {
                      x: "0%",
                      opacity: 1,
                    }
                    : {
                      x: "10%",
                      opacity: 0,
                    }
                }
                transition={{
                  x: {
                    duration: 0.8,
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 0.1
                  },
                }}
              >Front-End</motion.span>
              <motion.span
                initial={{
                  x: "-10%",
                  opacity: 0,
                }}
                animate={
                  introFinished
                    ? {
                      x: "0%",
                      opacity: 1,
                    }
                    : {
                      x: "-10%",
                      opacity: 0,
                    }
                }
                transition={{
                  x: {
                    duration: 0.8,
                    delay: 0.2
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 0.3
                  },
                }}
              >Developer</motion.span>
            </h1>
          </div>

          <motion.div
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
            className="hero__intro-content">
            <p className="hero__description">
              Je conçois des interfaces web modernes, accessibles et agréables à
              utiliser, avec une attention particulière portée aux détails.
            </p>

            <a href="#projects" className="hero__projects">
              <span>Mes projets →</span>
            </a>
          </motion.div>
        </div>

        <motion.div
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
          className="hero__showcase">


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
        </motion.div>
      </section>
    </main>
  )
}