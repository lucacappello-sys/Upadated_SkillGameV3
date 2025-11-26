import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import { ROLES, ROLE_PROFILES } from '../data/GameData';
import '../assets/styles/operatorprofile.scss';

export default function OperatorProfileScreen() {
  const navigate = useNavigate();
  const { selectedRole, updateHeader, updateFooter } = useGame();

  const roleData = ROLES.find(r => r.id === selectedRole);
  // Recupera profilo o usa default vuoto se non trovato
  const profileData = selectedRole ? ROLE_PROFILES[selectedRole] : null;

  useEffect(() => {
    updateHeader({
      title: 'Operator profile',
      subtitle: 'This is a summary of the main tasks and skills required.',
      isSkillScreen: false
    });

    updateFooter({
      isVisible: true,
      text: 'Next',
      isDisabled: false,
      dotIndex: 9,
      onContinue: () => navigate('/user-info'),
      onBack: () => navigate('/results'),
      altColor: true
    });
  }, [navigate, updateHeader, updateFooter]);

  if (!roleData || !profileData) return null;

  return (
    <div className="page-content">
      <div className="operator-profile-content">
        <div className="profile-card">
          {/* Immagine */}
          <div className="profile-card__image-section">
            <img src={roleData.illustration} alt={roleData.title} />
          </div>

          {/* Info */}
          <div className="profile-card__info-section">
            {/* Skills */}
            <div className="info-column">
              <h4 className="info-column__title">Skills</h4>
              {profileData.skills.map((skill, idx) => (
                <div key={idx} className="profile-skill">
                  <div className="profile-skill__bar-bg">
                    <div 
                      className="profile-skill__bar-fill" 
                      style={{ width: `${skill.value}%` }} 
                    />
                  </div>
                  <span className="profile-skill__name">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Tasks */}
            <div className="info-column">
              <h4 className="info-column__title">Tasks</h4>
              {profileData.tasks.map((task, idx) => (
                <div key={idx} className="profile-task">
                  <div className="profile-task__indicator-wrapper">
                    <div 
                      className="profile-task__indicator" 
                      style={{ backgroundColor: task.color }} 
                    />
                  </div>
                  <span className="profile-task__name">{task.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}