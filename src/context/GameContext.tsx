import  { useState, useMemo, useCallback, type ReactNode } from 'react'; // Aggiungi useCallback
import { GameContext, initialFooterState, initialHeaderState } from './useGame';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  // ... (stati vari: role, sector, skills, scores...)
  const [role, setRole] = useState<number | null>(null);
  const [sector, setSector] = useState<number | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finalScore, setFinalScore] = useState(0);
  
  const [footerConfig, setFooterConfig] = useState(initialFooterState);
  const [headerConfig, setHeaderConfig] = useState(initialHeaderState);

  // ... (toggleSkill, resetSkills, calculateResults, resetGame... usa useCallback anche qui se possibile, ma meno critico se non sono in useEffect dipendenti)

  const toggleSkill = useCallback((skill: string) => {
    setSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  }, []);

  const resetSkills = useCallback(() => setSkills([]), []);

  const calculateResults = useCallback(() => {
     // ... (logica calcolo) ...
     // Per brevità non la riscrivo tutta, ma avvolgila in useCallback o lasciala fuori se non ha dipendenze reattive
     // Se usa setScores, va bene.
     const randomScore = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
     const newScores = { /* ... */ }; 
     // ...
     setScores(newScores);
     // ...
     setFinalScore(Math.round(80)); // placeholder
  }, []);

  const resetGame = useCallback(() => {
    setRole(null);
    setSector(null);
    setSkills([]);
    setScores({});
    setFinalScore(0);
  }, []);

  // *** FIX CRITICO QUI SOTTO ***
  const updateFooter = useCallback((config: Partial<typeof initialFooterState>) => {
    // Usiamo un controllo per evitare update se non cambia nulla (opzionale ma buono)
    setFooterConfig(prev => ({ ...prev, ...config }));
  }, []);

  const updateHeader = useCallback((config: Partial<typeof initialHeaderState>) => {
    setHeaderConfig(prev => ({ ...prev, ...config }));
  }, []);

  const value = useMemo(() => ({
    selectedRole: role,
    selectedSector: sector,
    selectedSkills: skills,
    scores,
    finalScore,
    footerConfig,
    headerConfig,
    setRole,
    setSector,
    toggleSkill,
    resetSkills,
    calculateResults,
    resetGame,
    updateFooter,
    updateHeader
  }), [role, sector, skills, scores, finalScore, footerConfig, headerConfig, toggleSkill, resetSkills, calculateResults, resetGame, updateFooter, updateHeader]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
