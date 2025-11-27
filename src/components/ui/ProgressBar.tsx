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

  // Determina colore in base al punteggio (Hex codes from user request)
  const getBarColor = (s: number) => {
    if (s >= 75) return '#5AC18E'; // Green
    if (s >= 50) return '#E5B84B'; // Yellow
    return '#E57373';              // Red
  };

  return (
    <div className="score-bar">
      <div className="score-bar__title">{title}</div>
      <div className="score-bar__bar-wrapper">
        <div className="score-bar__bar-container">
          <div
            className="score-bar__bar"
            style={{
              width: `${animatedScore}%`,
              backgroundColor: getBarColor(score)
            }}
          />
        </div>
        <span className="score-bar__percentage">{score}%</span>
      </div>
    </div>
  );
}