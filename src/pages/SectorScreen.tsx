import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import SelectionCard from '../components/ui/SelectionCard';
import { SECTORS } from '../data/GameData';
import '../assets/styles/selectioncard.scss';

export default function SectorScreen() {
  const navigate = useNavigate();
  const { selectedSector, setSector, updateHeader, updateFooter } = useGame();

  useEffect(() => {
    updateHeader({
      title: 'Choose the sector:',
      subtitle: 'Select the industry sector you want to refer to.',
      isSkillScreen: false
    });

    updateFooter({
      isVisible: true,
      text: 'Continue',
      isDisabled: selectedSector === null,
      dotIndex: 1,
      onContinue: () => navigate('/review'),
      onBack: () => navigate('/role'),
      altColor: false
    });
  }, [selectedSector, navigate, updateHeader, updateFooter]);

  return (
    <div className="page-content">
      {/* Wrapper per lo scroll orizzontale */}
      <div className="horizontal-scroll-wrapper">
        {/* Qui usiamo limit-height-80 per l'altezza, ma lo scroll è gestito dal wrapper */}
        <div className="selection-list limit-height-80">
          {SECTORS.map(sector => (
            <SelectionCard
              key={sector.id}
              data={sector}
              isSelected={selectedSector === sector.id}
              onSelect={setSector}
              isSector={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}