import { useRef, useState } from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { motion } from "motion/react";
import "./Projects.scss";
import pokemonImage from "../../assets/pokedex.PNG";
import portfolio from "../../assets/portfolio.PNG";
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Un portfolio personnel démontrant mes capacités en tant que développeur. Réalisé avec React.",
    image: portfolio,
    github: "https://github.com/LarkAlfen/Portfolio",
  },
  {
    id: 2,
    title: "Pokédex",
    description:
      "Un site permettant de chercher tous les Pokémon, d'afficher leurs infos ainsi qu'un modèle 3D. Réalisé avec React et ThreeJS assisté par IA.",
    image: pokemonImage,
    github: "https://github.com/LarkAlfen/Pokedex",
  },

];

const clipIn = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
  },

  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    }
  }
}


const mod = (number, length) =>
  ((number % length) + length) % length;

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);

  const keyCounter = useRef(0);

  const createCard = (projectIndex) => {
    const project =
      projects[mod(projectIndex, projects.length)];

    keyCounter.current += 1;

    return {
      ...project,
      carouselId: keyCounter.current,
    };
  };

  const createInitialCards = () => {
    return Array.from(
      { length: 7 },
      (_, index) => createCard(index - 3)
    );
  };

  const [cards, setCards] = useState(createInitialCards);

  // Projet actuellement affiché au centre
  const activeIndex = mod(currentIndex, projects.length);

  const nextProject = () => {
    if (isAnimating) return;

    setDirection("next");
    setIsAnimating(true);
  };

  const previousProject = () => {
    if (isAnimating) return;

    setDirection("previous");
    setIsAnimating(true);
  };

  const handleTransitionEnd = (event) => {
    // Ignore les transitions provenant des enfants
    if (event.target !== event.currentTarget) return;

    // On écoute uniquement le déplacement du track
    if (event.propertyName !== "transform") return;

    // On coupe temporairement la transition
    setDisableTransition(true);

    if (direction === "next") {
      setCards((currentCards) => {
        const nextIndex = currentIndex + 4;
        const newCard = createCard(nextIndex);

        return [
          ...currentCards.slice(1),
          newCard,
        ];
      });

      setCurrentIndex((index) => index + 1);
    }

    if (direction === "previous") {
      setCards((currentCards) => {
        const previousIndex = currentIndex - 4;
        const newCard = createCard(previousIndex);

        return [
          newCard,
          ...currentCards.slice(0, -1),
        ];
      });

      setCurrentIndex((index) => index - 1);
    }

    setDirection(null);

    // On laisse React replacer les cartes sans animation
    // avant de réactiver les transitions.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDisableTransition(false);
        setIsAnimating(false);
      });
    });
  };

  return (
    <section className="projects" id="projects">
      <motion.h1
        variants={clipIn}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "0px 0px -100px 0px",
        }}
        className="projects__title">
        Mes projets
      </motion.h1>

      <motion.div
        variants={clipIn}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "0px 0px -100px 0px",
        }}
        className="projects__carousel">
        <button
          className="projects__arrow projects__arrow--left"
          onClick={previousProject}
          disabled={isAnimating}
          aria-label="Projet précédent"
        >
          ←
        </button>

        <div className="projects__viewport">
          <div
            className={`
              projects__track
              ${direction
                ? `projects__track--${direction}`
                : ""
              }
              ${disableTransition
                ? "projects__track--no-transition"
                : ""
              }
            `}
            onTransitionEnd={handleTransitionEnd}
          >
            {cards.map((project, index) => {
              // Les trois cartes visibles
              const isVisible =
                index >= 2 && index <= 4;

              // Carte centrale
              const isActive =
                index === 3;

              // Carte qui devient centrale
              const becomesActive =
                (direction === "next" && index === 4) ||
                (direction === "previous" && index === 2);

              // Carte qui quitte le centre
              const leavesActive =
                direction && index === 3;

              // Carte qui entre dans la zone visible
              const entersVisible =
                (direction === "next" && index === 5) ||
                (direction === "previous" && index === 1);

              // Carte qui quitte la zone visible
              const leavesVisible =
                (direction === "next" && index === 2) ||
                (direction === "previous" && index === 4);

              return (
                <div
                  key={project.carouselId}
                  className={`
                    projects__slide
                    ${isVisible
                      ? "projects__slide--visible"
                      : ""
                    }
                    ${isActive && !leavesActive
                      ? "projects__slide--active"
                      : ""
                    }
                    ${becomesActive
                      ? "projects__slide--becomes-active"
                      : ""
                    }
                    ${leavesActive
                      ? "projects__slide--leaves-active"
                      : ""
                    }
                    ${entersVisible
                      ? "projects__slide--enters-visible"
                      : ""
                    }
                    ${leavesVisible
                      ? "projects__slide--leaves-visible"
                      : ""
                    }
                  `}
                >
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="projects__arrow projects__arrow--right"
          onClick={nextProject}
          disabled={isAnimating}
          aria-label="Projet suivant"
        >
          →
        </button>
      </motion.div>

      {/* Pagination */}
      <div
        className="projects__pagination"
        aria-label="Projet actuellement affiché"
      >
        {projects.map((project, index) => (
          <span
            key={project.id}
            className={`projects__dot ${index === activeIndex
              ? "projects__dot--active"
              : ""
              }`}
          />
        ))}
      </div>
    </section>
  );
}