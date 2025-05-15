import React from 'react';
import { Route } from 'react-router-dom';

import AuthWrapper from '../features/auth/routing/AuthWrapper';
import { PageConfig } from '../config/types/types';

export const generateRoutesFromPageConfig = (
  configMap: Record<string, PageConfig>,
  parentPath = ''
): React.ReactNode[] => {
  return Object.entries(configMap).map(([key, config]) => {
    const isRoot = parentPath === '' && key === 'home';
    const path = config.path || (isRoot ? '/' : `${parentPath}/${key}`.replace(/\/+/g, '/'));

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

    // 3. Рекурсивно строим дочерние маршруты
    const children = Object.keys(config.children).length
      ? generateRoutesFromPageConfig(config.children, path)
      : undefined;

    return (
      <Route key={path} path={path} element={content}>
        {children}
      </Route>
    );
  });
};
