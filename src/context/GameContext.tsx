import { useState, useMemo, useCallback, type ReactNode } from 'react';
import { GameContext, initialFooterState, initialHeaderState } from './useGame';
import { ROLES, SECTORS, getCorrectSkills, ALL_SKILLS_UI } from '../data/GameData';

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
    if (!role || !sector) return;

    const roleData = ROLES.find(r => r.id === role);
    const sectorData = SECTORS.find(s => s.id === sector);

    if (!roleData || !sectorData) return;

    // Ottieni le skill corrette per questa combinazione
    const correctSkills = getCorrectSkills(roleData.title, sectorData.title);

    const newScores: Record<string, number> = {};
    const totalCorrectAvailable = correctSkills.length;

    // Calcola punteggio per ogni categoria
    Object.entries(ALL_SKILLS_UI).forEach(([category, categorySkills]) => {
      // Skill corrette che appartengono a questa categoria
      const expectedInCategory = correctSkills.filter(skill => categorySkills.includes(skill));

      // Skill selezionate dall'utente che sono corrette e appartengono a questa categoria
      const foundInCategory = skills.filter(skill =>
        expectedInCategory.includes(skill)
      );

      // Se non ci sono skill previste in questa categoria, diamo 100% (o 0% se vogliamo essere severi, ma 100 ha senso se "non hai sbagliato nulla")
      // Tuttavia, se l'utente ha selezionato skill sbagliate in questa categoria, potremmo voler penalizzare.
      // Per ora manteniamo la logica semplice: % di skill corrette trovate su quelle attese.
      if (expectedInCategory.length > 0) {
        newScores[category] = Math.round((foundInCategory.length / expectedInCategory.length) * 100);
      } else {
        newScores[category] = 100; // Nessuna skill richiesta, punteggio pieno
      }
    });

    // Calcolo punteggio finale (totale skill corrette trovate / totale skill corrette attese)
    // Nota: foundInCategory sopra è locale, ricalcoliamo il totale globale
    const totalFound = skills.filter(skill => correctSkills.includes(skill)).length;

    const finalScoreVal = totalCorrectAvailable > 0
      ? Math.round((totalFound / totalCorrectAvailable) * 100)
      : 0;

    setScores(newScores);
    setFinalScore(finalScoreVal);
  }, [role, sector, skills]);

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
