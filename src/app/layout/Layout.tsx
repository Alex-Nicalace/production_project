import { AppRouter } from 'app/routes';
import { Suspense } from 'react';
import { useTheme } from 'shared/context/theme';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

export function Layout() {
  const { theme } = useTheme();

  return (
    <Suspense fallback={<PageLoader />}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="app__content">
          <Sidebar />
          <AppRouter className="app__wrapper" />
        </div>
      </div>
    </Suspense>
  );
}
