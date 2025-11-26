import '../../assets/styles/resultsscreen.scss'; // Assumiamo che gli stili siano qui o in un file dedicato

interface ProgressBarProps {
  title: string;
  score: number;
}

export default function ProgressBar({ title, score }: ProgressBarProps) {
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
            style={{ width: `${score}%` }}
          />
        </div>
        <span className="score-bar__percentage">{score}%</span>
      </div>
    </div>
  );
}