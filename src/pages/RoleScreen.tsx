import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import SelectionCard from '../components/ui/SelectionCard';
import { ROLES } from '../data/GameData';
import '../assets/styles/selectioncard.scss';

export default function RoleScreen() {
  const navigate = useNavigate();
  const { selectedRole, setRole, updateHeader, updateFooter } = useGame();

  // Configura Header e Footer quando la pagina viene montata
  useEffect(() => {
    updateHeader({
      title: 'Choose the role:',
      subtitle: 'Select the role you want to analyse.',
      isSkillScreen: false
    });

    updateFooter({
      isVisible: true,
      text: 'Continue',
      isDisabled: selectedRole === null, // Disabilitato se nessun ruolo è scelto
      dotIndex: 0,
      onContinue: () => navigate('/sector'),
      onBack: undefined, // Niente back nella prima pagina
      altColor: false
    });
  }, [selectedRole, navigate, updateHeader, updateFooter]);

  return (
    <div className="page-content">
      {/* Wrapper per centrare e limitare l'altezza (80%) */}
      {/* Wrapper per centrare e limitare l'altezza (80%) */}
      <div className="horizontal-scroll-wrapper">
        <div className="selection-list limit-height-80">
          {ROLES.map(role => (
            <SelectionCard
              key={role.id}
              data={role}
              isSelected={selectedRole === role.id}
              onSelect={setRole}
            />
          ))}
        </div>
      </div>
    </div>
  );
}