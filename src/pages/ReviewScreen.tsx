import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import SelectionCard from '../components/ui/SelectionCard';
import { ROLES, SECTORS } from '../data/GameData';
import '../assets/styles/selectioncard.scss';

export default function ReviewScreen() {
  const navigate = useNavigate();
  const { selectedRole, selectedSector, updateHeader, updateFooter } = useGame();

  // Trova i dati completi in base agli ID salvati
  const roleData = ROLES.find(r => r.id === selectedRole);
  const sectorData = SECTORS.find(s => s.id === selectedSector);

  useEffect(() => {
    updateHeader({
      title: 'Review your choices:',
      subtitle: 'Review your selections before starting the game',
      isSkillScreen: false
    });

    updateFooter({
      isVisible: true,
      text: 'Start game',
      isDisabled: !roleData || !sectorData,
      dotIndex: 2,
      onContinue: () => navigate('/skills/technical'),
      onBack: () => navigate('/sector'),
      altColor: true // Colore diverso per "Start Game"
    });
  }, [selectedRole, selectedSector, roleData, sectorData, navigate, updateHeader, updateFooter]);

  return (
    <div className="page-content">
      <div className="horizontal-scroll-wrapper">
        <div className="selection-list limit-height-80" style={{ maxWidth: '900px' }}>
          {roleData && (
            <SelectionCard
              data={roleData}
              isInteractive={false} // Disabilita hover/click
            />
          )}
          {sectorData && (
            <SelectionCard
              data={sectorData}
              isSector={true}
              isInteractive={false} // Disabilita hover/click
            />
          )}
        </div>
      </div>
    </div>
  );
}