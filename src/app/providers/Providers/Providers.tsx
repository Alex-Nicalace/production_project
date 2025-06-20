import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/context/theme';
import { ErrorPage } from 'widgets/ErrorPage';
import { ErrorBoundary } from '../ErrorBoundary';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
}
