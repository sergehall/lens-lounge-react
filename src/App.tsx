// src/App.tsx
import React from 'react';

import GlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
};

export default App;
