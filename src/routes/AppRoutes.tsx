// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { pageConfig } from '../config/PageConfig';
import { generateRoutesFromPageConfig } from '../utils/generateRoutesFromPageConfig';

import { WhisperRoutes } from './WhisperRoutes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* All routes from pageConfig */}
      {generateRoutesFromPageConfig(pageConfig)}

      {/* Nested Whisper routes */}
      {WhisperRoutes()}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
