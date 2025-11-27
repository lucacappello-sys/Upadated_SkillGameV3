import { useState, useEffect } from 'react';
import '../../assets/styles/resultsscreen.scss';

interface ProgressBarProps {
  title: string;
  score: number;
}

export default function ProgressBar({ title, score }: ProgressBarProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);

    return () => clearTimeout(timer);
  }, [score]);

  // Determina colore in base al punteggio
  let colorClass = 'score-bar--low';
  if (score >= 75) colorClass = 'score-bar--high';
  else if (score >= 50) colorClass = 'score-bar--medium';

  return (
    <div className="score-bar">
      <div className="score-bar__title">{title}</div>
      <div className="score-bar__bar-wrapper">
        <div className="score-bar__bar-container">
          <div
            className={`score-bar__bar ${colorClass}`}
            style={{ width: `${animatedScore}%` }}
          />
        </div>
        <span className="score-bar__percentage">{score}%</span>
      </div>
    </div>
  );
}