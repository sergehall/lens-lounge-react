import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { pageConfig } from '../config/PageConfig';
import CategoryBlogsPage from '../features/category-blogs-page/CategoryBlogsPage';
import { RouteManager } from '../utils/routes/routeManager';
import { generateRoutesFromPageConfig } from '../utils/generateRoutesFromPageConfig';
import PageLayout from '../layouts/PageLayout';

import { ShowcaseRoutes } from './ShowcaseRoutes';
import { WhisperRoutes } from './WhisperRoutes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* All routes from pageConfig */}
      {generateRoutesFromPageConfig(pageConfig)}

      {/* Dynamic category blog page */}
      <Route
        path={RouteManager.getCategoryRoutePattern()}
        element={
          <PageLayout
            bannerImage={pageConfig.home.bannerImage}
            summarizeContent={pageConfig.home.pageContentSummarize}
          >
            <CategoryBlogsPage />
          </PageLayout>
        }
      />

      {/* Nested showcase routes */}
      {ShowcaseRoutes()}

      {/* Nested Whisper routes */}
      {WhisperRoutes()}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
