import { ALL_SKILLS_UI } from '../../data/GameData';
import '../../assets/styles/skillselectscreen.scss';

interface SkillBoxProps {
  skillType: string;
  title: string;
  selectedSkills: string[];
  onToggle: (skill: string) => void;
}

export default function SkillBox({ skillType, title, selectedSkills, onToggle }: SkillBoxProps) {
  // Recupera la lista delle skill dal file dati statici
  const skillsList = ALL_SKILLS_UI[skillType] || [];

  // Determina il layout CSS in base al tipo di skill
  let gridClass = 'skill-list--column'; // Default 1 colonna
  let contentWidthClass = 'skill-select-content--single-column';

  if (['technical'].includes(skillType)) {
    gridClass = 'skill-list--grid-3';
    contentWidthClass = 'skill-select-content--three-column';
  } else if (['collaboration'].includes(skillType)) {
    gridClass = 'skill-list--grid-2';
    contentWidthClass = 'skill-select-content--two-column';
  }

  // Alcuni elenchi lunghi (interaction) richiedono font più piccolo e allineamento in alto
  const isStartAligned = ['interaction', 'technical'].includes(skillType);


  return (
    <div className={`skill-select-content ${contentWidthClass}`}>
      <h3 className="skill-select-content__title">{title}</h3>

      <div className="skill-group">
        <div className={`skill-list ${gridClass}`}>
          {skillsList.map((skill) => (
            <label
              key={skill}
              className={`skill-item ${isStartAligned ? 'skill-item--align-start' : ''}`}
            >
              <input
                type="checkbox"
                className="skill-item__checkbox"
                checked={selectedSkills.includes(skill)}
                onChange={() => onToggle(skill)}
              />
              <span className={`skill-item__label ${selectedSkills.includes(skill) ? 'skill-item__label--selected' : ''}`}>
                {skill}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}