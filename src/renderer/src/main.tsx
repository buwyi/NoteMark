import './assets/main.css';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
