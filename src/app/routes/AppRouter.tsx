import { JSX, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig';

interface AppRouterProps {
  className?: string;
}
function AppRouter({ className }: AppRouterProps): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className={className}>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
