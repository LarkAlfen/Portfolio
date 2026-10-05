import { useEffect, useState } from "react";
import "./Loader.scss";

export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const duration = 1400;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = current + increment;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setFinished(true);
          }, 200);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = (event) => {
    if (
      finished &&
      event.target.classList.contains("loader__panel--top")
    ) {
      onFinished();
      setHidden(true);
    }
  };

  if (hidden) return null;

  return (
    <div
      className={`loader ${finished ? "loader--finished" : ""}`}
      
    >
      <div className="loader__panel loader__panel--top" onTransitionEnd={handleTransitionEnd}/>
      <div className="loader__panel loader__panel--bottom" />

      <div className="loader__content">
        <div className="loader__progress">
          <div
            className="loader__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="loader__percentage">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}