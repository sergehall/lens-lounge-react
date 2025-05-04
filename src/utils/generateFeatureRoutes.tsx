import React from 'react';
import { Route } from 'react-router-dom';

import LayoutWrapper from '../layouts/LayoutWrapper';
import { PageConfig } from '../config/PageConfig';

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
