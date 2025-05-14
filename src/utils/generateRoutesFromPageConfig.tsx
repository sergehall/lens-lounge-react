import React from 'react';
import { Route } from 'react-router-dom';

import { PageConfig } from '../config/types/types';
import AuthWrapper from '../features/auth/routing/AuthWrapper';

export const generateRoutesFromPageConfig = (
  configMap: Record<string, PageConfig>,
  parentPath = ''
): React.ReactNode[] => {
  return Object.entries(configMap).map(([key, config]) => {
    const isRoot = parentPath === '' && key === 'home';
    const path = isRoot ? '/' : `${parentPath}/${key}`.replace(/\/+/g, '/');

    // Compose element with banner + summary if layout is not 'none'
    let content = <config.component />;

    if (config.layoutType !== 'none') {
      const Banner = config.bannerImage;
      const Summary = config.pageContentSummarize;
      content = (
        <>
          <Banner />
          <Summary />
          {content}
        </>
      );
    }

    if (config.isProtected) {
      content = <AuthWrapper unauthLandingProps={config.unauthLandingProps}>{content}</AuthWrapper>;
    }

    const children =
      Object.keys(config.children).length > 0
        ? generateRoutesFromPageConfig(config.children, path)
        : undefined;

    return (
      <Route key={path} path={isRoot ? '/' : key} element={content}>
        {children}
      </Route>
    );
  });
};
