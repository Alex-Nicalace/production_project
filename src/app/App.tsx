import { Suspense } from 'react';

import { AppRouter } from 'app/routes';
import { useTheme } from 'shared/context/theme';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="app__content">
          <Sidebar />
          <AppRouter className="app__wrapper" />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
