import React from 'react';
import './lib/sass/global.scss';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

import './index.css';
import CodeEditor from './pages/CodeEditor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="codeeditor" element={<CodeEditor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
