import React from 'react';
import { Navigate, Route } from 'react-router-dom';

import UserBlogs from '../features/showcase/user-blogs/UserBlogs';
import { RouteManager } from '../utils/routes/routeManager';
import { pageConfig } from '../config/PageConfig';
import { generateFeatureRoute } from '../utils/generateFeatureRoutes';

/**
 * Showcase-specific dynamic blog route.
 */
export const ShowcaseRoutes = () => {
  const sidebarRedirect = (
    <Route
      path={RouteManager.getSidebarPaths().showcase}
      element={<Navigate to={RouteManager.getShowcaseCategoryPattern()} replace />}
    />
  );

  const categoriesRoutes = [
    // /showcase/categories
    generateFeatureRoute(RouteManager.getShowcaseCategoryPattern(), pageConfig.showcase),

    // /showcase/categories/:name
    generateFeatureRoute(
      RouteManager.getShowcaseCategoryRoutePattern(),
      { ...pageConfig.showcase, component: UserBlogs },
      undefined,
      'showcase-category-dynamic'
    ),
  ];

  return (
    <>
      {sidebarRedirect}
      {categoriesRoutes}
    </>
  );
};
