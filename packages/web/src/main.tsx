import React from 'react';
import './lib/sass/global.scss';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import TerminalFinal from './features/terminal/Terminal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terminal" element={<TerminalFinal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
