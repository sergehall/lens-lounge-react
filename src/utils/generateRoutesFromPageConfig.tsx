import React from 'react';
import { Route } from 'react-router-dom';

import { PageConfig } from '../config/types/types';
import PageLayout from '../layouts/PageLayout';
import PrivateRoute from '../components/routing/PrivateRoute';

/**
 * Recursively generate <Route /> elements from pageConfig,
 * automatically wrapping protected routes with <PrivateRoute />
 */
export const generateRoutesFromPageConfig = (
  configMap: Record<string, PageConfig>,
  parentPath = ''
): React.ReactNode[] => {
  return Object.entries(configMap).map(([key, config]) => {
    const path = parentPath + (key === 'home' && parentPath === '' ? '/' : `/${key}`);

    let element = (
      <PageLayout bannerImage={config.bannerImage} summarizeContent={config.pageContentSummarize}>
        <config.component />
      </PageLayout>
    );

    if (config.isProtected) {
      element = <PrivateRoute>{element}</PrivateRoute>;
    }

    const childrenRoutes = Object.keys(config.children).length
      ? generateRoutesFromPageConfig(config.children, `${path}`)
      : undefined;

    return (
      <Route key={path} path={path} element={element}>
        {childrenRoutes}
      </Route>
    );
  });
};
