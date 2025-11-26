import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import SkillBox from '../components/ui/SkillBox';
import { ROLES, SECTORS } from '../data/GameData';

interface GenericSkillScreenProps {
  type: string; // 'technical', 'operational', etc.
  next: string; // La rotta successiva (es. '/skills/operational')
  prev?: string; // Opzionale, se vuoi forzare il back, altrimenti usa history -1
}

// Mappa per i titoli delle skill
const TITLES: Record<string, string> = {
  technical: 'Technical skills',
  operational: 'Operational skills',
  analytical: 'Analytical skills',
  collaboration: 'Collaboration and Communication skills',
  management: 'Management skills',
  personal: 'Personal / Soft skills',
  interaction: 'Interaction / UX skills',
};

// Mappa per i pallini di progresso
const DOT_INDEXES: Record<string, number> = {
  technical: 3, operational: 4, analytical: 5, collaboration: 6,
  management: 7, personal: 8, interaction: 9
};

export default function GenericSkillScreen({ type, next }: GenericSkillScreenProps) {
  const navigate = useNavigate();
  const { 
    selectedRole, selectedSector, selectedSkills, 
    toggleSkill, updateHeader, updateFooter 
  } = useGame();

  const roleName = ROLES.find(r => r.id === selectedRole)?.title || 'ROLE';
  const sectorName = SECTORS.find(s => s.id === selectedSector)?.title || 'SECTOR';

  useEffect(() => {
    updateHeader({
      title: 'Select skills:',
      subtitle: `Choose the skills that, in your opinion, allow ${roleName} to work in ${sectorName}.`,
      isSkillScreen: true
    });

    updateFooter({
      isVisible: true,
      text: 'Continue',
      isDisabled: false, // Normalmente non si blocca la selezione skill, opzionale
      dotIndex: DOT_INDEXES[type] || 3,
      onContinue: () => navigate(next),
      onBack: () => navigate(-1), // Torna indietro nella storia
      altColor: false
    });
  }, [type, next, roleName, sectorName, navigate, updateHeader, updateFooter]);

  return (
    <div className="page-content">
      <SkillBox
        skillType={type}
        title={TITLES[type] || 'Skills'}
        selectedSkills={selectedSkills}
        onToggle={toggleSkill}
      />
    </div>
  );
}