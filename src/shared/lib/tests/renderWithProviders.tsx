import { render } from '@testing-library/react';
import { JSX } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from 'app/routes';
import { ThemeProvider } from 'shared/context/theme';
import i18nForTests from 'shared/i18n/i18nForTests';

export const renderWithProviders = (element: JSX.Element, initialRoute = '/') =>
  render(
    <ThemeProvider>
      <I18nextProvider i18n={i18nForTests}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <AppRouter />
          {element}
        </MemoryRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
