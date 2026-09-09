export function InfoCards({ title, description, tags }) {
    return (
        <div className="info__card">
            <div className="info__content">
                <h2 className="info__title">{title}</h2>

                <p className="info__description">
                    {description}
                </p>
            </div>

            {tags?.length > 0 && (
            <div className="info__tags">
                {tags.map((tag) =>(
                    <span className="info__tag" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>
            )}
        </div>
    )
}