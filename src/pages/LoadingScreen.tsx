import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import '../assets/styles/loadingscreen.scss';

export default function LoadingScreen() {
  const navigate = useNavigate();
  const { calculateResults, updateHeader, updateFooter } = useGame();
  const [progress, setProgress] = useState(0);

  // Nascondi Header e Footer durante il caricamento
  useEffect(() => {
    updateHeader({ title: '', subtitle: '' }); // Titolo vuoto o nascosto
    updateFooter({ isVisible: false }); // Footer nascosto
  }, [updateHeader, updateFooter]);

  // Gestione incremento progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Velocità caricamento
      });
    }, 50); // Ogni 50ms

    return () => clearInterval(interval);
  }, []);

  // Gestione completamento caricamento
  useEffect(() => {
    if (progress >= 100) {
      calculateResults(); // Calcola i risultati solo quando finito
      const timer = setTimeout(() => navigate('/results'), 500); // Vai ai risultati
      return () => clearTimeout(timer);
    }
  }, [progress, calculateResults, navigate]);

  return (
    <div className="page-content">
      <div className="loading-screen">
        <h2 className="loading-screen__title">Loading results...</h2>
        <div className="loading-screen__progress-container">
          <div
            className="loading-screen__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}