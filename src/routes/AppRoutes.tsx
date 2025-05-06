import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { pageConfig } from '../config/PageConfig';
import CategoryBlogsPage from '../features/category-blogs-page/CategoryBlogsPage';
import MyCategoryBlogsPage from '../features/showcase/my-blogs/MyCategoryBlogsPage';
import { RouteManager } from '../utils/routeManager';
import { WhisperRoutes } from './WhisperRoutes';
import {
  generateRoutesFromPageConfig,
  splitProtectedRoutes,
} from '../utils/generateRoutesFromPageConfig';
import LayoutWrapper from '../layouts/LayoutWrapper';
import PrivateRoute from '../components/routing/PrivateRoute';

// Split into protected and public configs
const { protectedConfig, publicConfig } = splitProtectedRoutes(pageConfig);

/**
 * AppRoutes component defines the overall routing structure of the app.
 * It uses React Router to switch between different features and pages.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes generated from config */}
      {generateRoutesFromPageConfig(publicConfig)}x
      {/* Protected routes wrapped with PrivateRoute */}
      {generateRoutesFromPageConfig(protectedConfig, '', (element) => (
        <PrivateRoute>{element}</PrivateRoute>
      ))}
      {/* Dynamic category blog page route for homepage */}
      <Route
        path={RouteManager.getCategoryRoutePattern()}
        element={
          <LayoutWrapper pageConfig={pageConfig.home}>
            <CategoryBlogsPage />
          </LayoutWrapper>
        }
      />
      {/* Dynamic showcase blog page route */}
      <Route
        path={RouteManager.getShowcaseCategoryRoutePattern()}
        element={
          <LayoutWrapper pageConfig={pageConfig.showcase}>
            <MyCategoryBlogsPage />
          </LayoutWrapper>
        }
      />
      {/* Whisper feature-specific nested routes */}
      {WhisperRoutes()}
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
