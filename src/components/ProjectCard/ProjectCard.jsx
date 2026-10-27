import "./ProjectCard.scss";

export function ProjectCard({ title, description, image, github }) {
  return (
    <a className="project-card" href={github} target="_blank" rel="noopener noreferrer" aria-label={`dépôt GitHub du projet ${title}`}>
      <div
        className="project-card__visual"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="project-card__background" />

        <h3 className="project-card__title">
          {title}
        </h3>
      </div>

      <div className="project-card__content">
        <p className="project-card__description">
          {description}
        </p>
      </div>
    </a>
  );
}