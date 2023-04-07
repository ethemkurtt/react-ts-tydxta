import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Copyright from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Copyright />
  </StrictMode>
);
