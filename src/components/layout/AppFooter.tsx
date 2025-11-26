import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGame } from '../../context/useGame';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/applayout.scss';

export default function AppFooter() {
  const { footerConfig, resetGame } = useGame();
  const navigate = useNavigate();

  const { 
    isVisible, isDisabled, text, dotIndex, 
    onContinue, onBack, altColor 
  } = footerConfig;

  if (!isVisible) return null;

  const handleHome = () => {
    resetGame();
    navigate('/');
  };

  const continueButtonClass = `primary-button ${altColor ? 'primary-button--alt-color' : ''}`;

  return (
    <footer className="app-footer">
      <div className="app-footer__left-actions">
        <button onClick={handleHome} className="icon-button icon-button--home-style">
          <Home className="icon-button__icon" />
        </button>

        {onBack && (
          <button onClick={onBack} className="secondary-button">
            <ChevronLeft className="secondary-button__icon" />
            Back
          </button>
        )}
      </div>

      <div className="pagination">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`pagination__dot ${index === dotIndex ? 'pagination__dot--active' : ''}`}
          />
        ))}
      </div>

      <button onClick={onContinue} disabled={isDisabled} className={continueButtonClass}>
        {text}
        <ChevronRight className="primary-button__icon" />
      </button>
    </footer>
  );
}