import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import SelectionCard from '../components/ui/SelectionCard';
import ProgressBar from '../components/ui/ProgressBar';
import { ROLES, SECTORS } from '../data/GameData';
import '../assets/styles/resultsscreen.scss';

export default function ResultsScreen() {
  const navigate = useNavigate();
  const {
    selectedRole, selectedSector, scores, finalScore,
    updateHeader, updateFooter, saveResultsToSupabase
  } = useGame();

  const [isSaving, setIsSaving] = useState(false);

  const roleData = ROLES.find(r => r.id === selectedRole);
  const sectorData = SECTORS.find(s => s.id === selectedSector);

  // Ordine di visualizzazione delle skill
  const scoreList = [
    { title: "Technical Skills", score: scores.technical || 0 },
    { title: "Operational Skills", score: scores.operational || 0 },
    { title: "Analytical Skills", score: scores.analytical || 0 },
    { title: "Collaboration and Communication Skills", score: scores.collaboration || 0 },
    { title: "Management Skills", score: scores.management || 0 },
    { title: "Personal/Soft Skills", score: scores.personal || 0 },
    { title: "Interaction UX Skills", score: scores.interaction || 0 },
  ];

  useEffect(() => {
    updateHeader({
      title: 'Your results:',
      subtitle: '',
      isSkillScreen: false
    });

    updateFooter({
      isVisible: true,
      text: isSaving ? 'Saving...' : 'Continue',
      isDisabled: isSaving,
      dotIndex: 9,
      onContinue: async () => {
        setIsSaving(true);
        await saveResultsToSupabase();
        setIsSaving(false);
        navigate('/profile'); // Va alla schermata del profilo operatore
      },
      onBack: undefined, // Evitiamo di tornare al loading
      altColor: true
    });
  }, [navigate, updateHeader, updateFooter, saveResultsToSupabase, isSaving]);

  return (
    <div className="page-content">
      <div className="results-screen-content">
        {/* Colonna Sinistra: Card e Score Finale */}
        <div className="results-screen-content__left">
          <div className="results-screen-content__cards">
            {roleData && <SelectionCard data={roleData} isInteractive={false} showDescription={false} />}
            {sectorData && <SelectionCard data={sectorData} isSector={true} isInteractive={false} showDescription={false} />}
          </div>

          <div className="final-score-box">
            <span className="final-score-box__text">
              Final Score: <span className="final-score-box__value">{finalScore}% Correct Answers</span>
            </span>
          </div>
        </div>

        {/* Colonna Destra: Barre */}
        <div className="results-screen-content__right">
          {scoreList.map(item => (
            <ProgressBar key={item.title} title={item.title} score={item.score} />
          ))}
        </div>
      </div>
    </div>
  );
}