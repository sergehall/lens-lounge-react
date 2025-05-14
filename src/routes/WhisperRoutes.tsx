import React from 'react';
import { Navigate, Route } from 'react-router-dom';

import { RouteManager } from '../utils/routes/routeManager';
import { pageConfig } from '../config/PageConfig';
import { generateFeatureRoute } from '../utils/generateFeatureRoutes';

/**
 * Whisper-specific routes for dialogs and contacts.
 */
export const WhisperRoutes = () => {
  const sidebarRedirect = (
    <Route
      path={RouteManager.getWhisperRoot()}
      element={<Navigate to={RouteManager.getWhisperChatsRoot()} replace />}
    />
  );

  const dialogRoutes = [
    generateFeatureRoute(RouteManager.getWhisperChatsRoot(), pageConfig.whisperDialogs),
    generateFeatureRoute(RouteManager.getWhisperChatRoutePattern(), pageConfig.whisperDialogs),
  ];

  const contactRoutes = [
    generateFeatureRoute(RouteManager.getWhisperContactsRoot(), pageConfig.whisperContacts),
    generateFeatureRoute(RouteManager.getWhisperContactsPattern(), pageConfig.whisperContacts),
  ];

  return (
    <>
      {sidebarRedirect}
      {dialogRoutes}
      {contactRoutes}
    </>
  );
};
