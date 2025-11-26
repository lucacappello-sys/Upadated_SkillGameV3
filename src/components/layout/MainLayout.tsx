import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import '../../assets/styles/applayout.scss';

export default function MainLayout() {
  return (
    <div className="app-layout">
      <div className="app-layout__header">
        <AppHeader />
      </div>

      <main className="app-layout__main">
        <Outlet />
      </main>

      <div className="app-layout__footer">
        <AppFooter />
      </div>
    </div>
  );
}