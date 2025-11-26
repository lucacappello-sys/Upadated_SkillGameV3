import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import '../assets/styles/welcomescreen.scss';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const { resetGame } = useGame();

  const handleStart = () => {
    resetGame(); // Resetta lo stato per una nuova partita
    navigate('/role');
  };

  return (
    <div className="screen-container welcome-screen">
      <div className="welcome-screen__box">
        <h2 className="welcome-screen__title">Operator Skills Game</h2>
        <p className="welcome-screen__text">
          Are you curious to learn more about the impact of Industry 5.0 technologies on people?
        </p>
        <p className="welcome-screen__text">
          The role of humans will evolve, and new skills will be required.
          Press Start and discover how much you know about this topic.
        </p>
        
        <button onClick={handleStart} className="welcome-screen__start-button">
          START
        </button>
      </div>
    </div>
  );
}