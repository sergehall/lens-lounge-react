// src/components/routing/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

import { selectIsAuthenticated } from '../../features/auth/authSlice';
import { useAppSelector } from '../../hooks/reduxHooks';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
