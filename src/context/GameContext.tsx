import { useState, useMemo, useCallback, type ReactNode } from 'react';
import { GameContext, initialFooterState, initialHeaderState } from './useGame';
import { ROLES, SECTORS, getCorrectSkills, ALL_SKILLS_UI } from '../data/GameData';
import { supabase } from '../supabaseClient';

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
        // If no skills are expected in this category, we start with 100%
        // and penalize for every skill selected in this category (which is by definition wrong).
        // Formula: 100 - (selected_in_category / total_in_category) * 100
        const selectedInCategory = skills.filter(skill => categorySkills.includes(skill));
        const totalInCategory = categorySkills.length;

        if (totalInCategory > 0) {
          const penalty = (selectedInCategory.length / totalInCategory) * 100;
          newScores[category] = Math.max(0, Math.round(100 - penalty));
        } else {
          newScores[category] = 100;
        }
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

  // Stato per il timestamp della sessione
  const [sessionTimestamp, setSessionTimestamp] = useState<string | null>(null);

  const saveResultsToSupabase = useCallback(async () => {
    if (!role || !sector) return;

    const roleData = ROLES.find(r => r.id === role);
    const sectorData = SECTORS.find(s => s.id === sector);

    const roleTitle = roleData?.title || 'N/A';
    const sectorTitle = sectorData?.title || 'N/A';

    // Chiave condivisa tra le due fasi
    const ts = new Date().toISOString();

    // 1) INSERT di base
    const baseInsert = {
      Timestamp: ts,
      Role: roleTitle,
      Scenario: sectorTitle,
      'Final Score': `${finalScore}% Correct Answers`,
      Job: '',
      Context: '',
      Country: '',
    };

    try {
      const { error: insertErr } = await supabase
        .from('game_sessions')
        .insert([baseInsert]);

      if (insertErr) {
        console.error('[Supabase INSERT error]', insertErr);
        // Non blocchiamo l'utente, ma logghiamo l'errore
        return;
      }

      // 2) UPDATE delle colonne skill
      // Mappiamo le skill selezionate nelle rispettive categorie
      const skillsByCategory: Record<string, string[]> = {
        "Technical": [],
        "Operational": [],
        "Analytical": [],
        "Collaboration": [],
        "Management": [],
        "Personal/Soft": [],
        "Interaction/UX": []
      };

      // Helper per mappare le chiavi di ALL_SKILLS_UI ai nomi delle colonne DB
      const categoryMap: Record<string, string> = {
        "technical": "Technical",
        "operational": "Operational",
        "analytical": "Analytical",
        "collaboration": "Collaboration",
        "management": "Management",
        "personal": "Personal/Soft",
        "interaction": "Interaction/UX"
      };

      // Iteriamo su tutte le categorie per trovare dove stanno le skill selezionate
      Object.entries(ALL_SKILLS_UI).forEach(([catKey, catSkills]) => {
        const dbColumnName = categoryMap[catKey];
        if (dbColumnName) {
          // Troviamo le skill selezionate che appartengono a questa categoria
          const found = skills.filter(s => catSkills.includes(s));
          if (found.length > 0) {
            skillsByCategory[dbColumnName] = found;
          }
        }
      });

      // Creiamo il payload per l'update: ogni colonna avrà una stringa con le skill separate da virgola
      const updatePayload: Record<string, string> = {};
      Object.entries(skillsByCategory).forEach(([col, skillList]) => {
        if (skillList.length > 0) {
          updatePayload[col] = skillList.join(', ');
        }
      });

      const { error: updateSkillsErr } = await supabase
        .from('game_sessions')
        .update(updatePayload)
        .eq('Timestamp', ts);

      if (updateSkillsErr) {
        console.warn('[Supabase UPDATE skills error]', updateSkillsErr);
      }

      setSessionTimestamp(ts);
    } catch (e) {
      console.error('[Network/Unexpected error during INSERT/UPDATE]', e);
    }
  }, [role, sector, finalScore, skills]);

  const saveUserInfoToSupabase = useCallback(async (data: { jobTitle: string; industry: string; country: string }) => {
    if (!sessionTimestamp) {
      console.warn('Sessione non valida: non trovo la riga precedente.');
      return;
    }

    try {
      const { error } = await supabase
        .from('game_sessions')
        .update({
          Job: data.jobTitle,
          Context: data.industry,
          Country: data.country,
        })
        .eq('Timestamp', sessionTimestamp);

      if (error) {
        console.error('[Supabase UPDATE user info error]', error);
        throw error;
      }
    } catch (e) {
      console.error('[Network/Unexpected error during UPDATE user info]', e);
      throw e;
    }
  }, [sessionTimestamp]);

  const resetGame = useCallback(() => {
    setRole(null);
    setSector(null);
    setSkills([]);
    setScores({});
    setFinalScore(0);
    setSessionTimestamp(null);
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
    updateHeader,
    saveResultsToSupabase,
    saveUserInfoToSupabase
  }), [role, sector, skills, scores, finalScore, footerConfig, headerConfig, toggleSkill, resetSkills, calculateResults, resetGame, updateFooter, updateHeader, saveResultsToSupabase, saveUserInfoToSupabase]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
