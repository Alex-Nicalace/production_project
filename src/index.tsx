import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'shared/context/theme';
import App from './app/App';

import 'shared/i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
