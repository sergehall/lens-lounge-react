// src/utils/test-utils/RenderWithProviders.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../app/store';
import theme from '../../themes/theme';

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{ui}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
