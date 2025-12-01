import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext'; // Assicurati che importi il Provider
import MainLayout from './components/layout/MainLayout';

// Importazione Stili Globali (CRUCIALE)
import './assets/styles/global.scss';
import './assets/styles/layout.scss'; // Layout strutturale
// Gli altri stili (card, skills, etc.) sono importati nei singoli componenti/pagine

// Import Pagine
import WelcomeScreen from './pages/WelcomeScreen';
import RoleScreen from './pages/RoleScreen';
import SectorScreen from './pages/SectorScreen';
import ReviewScreen from './pages/ReviewScreen';
import GenericSkillScreen from './pages/GenericSkillScreen';
import ResultsScreen from './pages/ResultsScreen';
import OperatorProfileScreen from './pages/OperatorProfileScreen';
import UserInfoScreen from './pages/UserInfoScreen';
import LoadingScreen from './pages/LoadingScreen';

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          {/* 1. Pagina Welcome (Fuori dal layout principale) */}
          <Route path="/" element={<WelcomeScreen />} />

          {/* 2. Pagine del Gioco (Dentro MainLayout: Header + Content + Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/role" element={<RoleScreen />} />
            <Route path="/sector" element={<SectorScreen />} />
            <Route path="/review" element={<ReviewScreen />} />
            <Route path="/skills/technical" element={<GenericSkillScreen type="technical" next="/skills/operational" />} />
            <Route path="/skills/operational" element={<GenericSkillScreen type="operational" next="/skills/analytical" />} />
            <Route path="/skills/analytical" element={<GenericSkillScreen type="analytical" next="/skills/collaboration" />} />
            <Route path="/skills/collaboration" element={<GenericSkillScreen type="collaboration" next="/skills/management" />} />
            <Route path="/skills/management" element={<GenericSkillScreen type="management" next="/skills/personal" />} />
            <Route path="/skills/personal" element={<GenericSkillScreen type="personal" next="/skills/interaction" />} />
            <Route path="/skills/interaction" element={<GenericSkillScreen type="interaction" next="/loading" />} />

            {/* Rotte Finali */}
            <Route path="/results" element={<ResultsScreen />} />
            <Route path="/profile" element={<OperatorProfileScreen />} />
          </Route>
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/user-info" element={<UserInfoScreen />} />
          {/* 3. Fallback: Se l'URL non esiste, torna alla home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}