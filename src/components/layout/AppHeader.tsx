import { useGame } from '../../context/useGame';
import '../../assets/styles/applayout.scss'; // Assicurati che questo file esista con gli stili base

export default function AppHeader() {
  const { headerConfig } = useGame();
  const { title, subtitle, isSkillScreen } = headerConfig;

  const titleClass = `app-header__title ${isSkillScreen ? 'app-header__title--skills' : ''}`;

  return (
    <header className="app-header">
      <h2 className={titleClass}>{title}</h2>
      {subtitle && <p className="app-header__subtitle">{subtitle}</p>}
    </header>
  );
}