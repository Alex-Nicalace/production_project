import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './components/Counter';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Counter />
    </div>
  </React.StrictMode>
);
