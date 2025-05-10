import React from 'react';
import { Route } from 'react-router-dom';
import { PageConfig } from '../config/types/types';

import LayoutWrapper from '../layouts/LayoutWrapper';

/**
 * Generates a Route element with LayoutWrapper for a given path and config.
 * Optionally adds nested routes if provided.
 */
export const generateFeatureRoute = (
  path: string,
  config: PageConfig,
  children?: React.ReactNode
) => {
  return (
    <Route
      path={path}
      element={
        <LayoutWrapper pageConfig={config}>
          <config.component />
        </LayoutWrapper>
      }
    >
      {children}
    </Route>
  );
};
