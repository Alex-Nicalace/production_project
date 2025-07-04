import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'app/App';

import 'shared/i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
