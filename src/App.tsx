// src/App.tsx
import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import * as S from './styles/app.styles';
import GlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <S.AppContainer>
        {/* Header */}
        <S.AppHeader data-testid="app-header">
          <Header />
        </S.AppHeader>

        {/* Sidebar */}
        <S.AppSidebar data-testid="app-sidebar">
          <Sidebar />
        </S.AppSidebar>

        {/* Content */}
        <S.AppContent data-testid="app-content">
          <AppRoutes />
        </S.AppContent>
      </S.AppContainer>
    </>
  );
};

export default App;

// If You Want to Strip data-testid in Production
// You can do something like this in a custom Babel plugin or build tool step:
// if (process.env.NODE_ENV === 'production') {
//   // Remove all data-testid attributes during build
// }
// Or, use something like:
// babel-plugin-react-remove-properties
// With config:
// ["react-remove-properties", { "properties": ["data-testid"] }]
