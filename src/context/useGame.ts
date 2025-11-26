import { createContext, useContext } from 'react';

// Definizione tipi stato
export interface GameState {
  selectedRole: number | null;
  selectedSector: number | null;
  selectedSkills: string[];
  scores: Record<string, number>;
  finalScore: number;
  // Configurazione Footer dinamica
  footerConfig: {
    isVisible: boolean;
    isDisabled: boolean;
    text: string;
    dotIndex: number;
    onContinue: () => void;
    onBack?: () => void;
    altColor?: boolean;
  };
  // Configurazione Header dinamica
  headerConfig: {
    title: string;
    subtitle: string;
    isSkillScreen: boolean;
  };
}

export interface GameContextType extends GameState {
  setRole: (id: number) => void;
  setSector: (id: number) => void;
  toggleSkill: (skill: string) => void;
  resetSkills: () => void;
  calculateResults: () => void;
  resetGame: () => void;
  updateFooter: (config: Partial<GameState['footerConfig']>) => void;
  updateHeader: (config: Partial<GameState['headerConfig']>) => void;
}

export const initialFooterState = {
  isVisible: true,
  isDisabled: false,
  text: 'Continue',
  dotIndex: 0,
  onContinue: () => {},
  altColor: false
};

export const initialHeaderState = {
  title: '',
  subtitle: '',
  isSkillScreen: false
};

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
};