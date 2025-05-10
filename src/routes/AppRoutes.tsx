// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { pageConfig } from '../config/PageConfig';
import CategoryBlogsPage from '../features/category-blogs-page/CategoryBlogsPage';
import UserBlogs from '../features/showcase/user-blogs/UserBlogs';
import { RouteManager } from '../utils/routes/routeManager';
import {
  generateRoutesFromPageConfig,
  splitProtectedRoutes,
} from '../utils/generateRoutesFromPageConfig';
import PrivateRoute from '../components/routing/PrivateRoute';
import PageLayout from '../layouts/PageLayout';

import { WhisperRoutes } from './WhisperRoutes';

const { protectedConfig, publicConfig } = splitProtectedRoutes(pageConfig);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      {generateRoutesFromPageConfig(publicConfig)}

      {/* Protected routes */}
      {generateRoutesFromPageConfig(protectedConfig, '', (element) => (
        <PrivateRoute>{element}</PrivateRoute>
      ))}

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

      {/* Dynamic showcase blog page */}
      <Route
        path={RouteManager.getShowcaseCategoryRoutePattern()}
        element={
          <PageLayout
            bannerImage={pageConfig.showcase.bannerImage}
            summarizeContent={pageConfig.showcase.pageContentSummarize}
          >
            <UserBlogs />
          </PageLayout>
        }
      />

      {/* Nested Whisper routes */}
      {WhisperRoutes()}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
