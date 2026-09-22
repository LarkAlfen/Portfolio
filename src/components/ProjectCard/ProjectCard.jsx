import "./ProjectCard.scss";

export function ProjectCard({ title, description, image }) {
  return (
    <article className="project-card">
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
    </article>
  );
}