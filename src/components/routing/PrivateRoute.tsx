// src/components/routing/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

// Simulate an auth state (replace with real one from Redux or context)
const isAuthenticated = true;

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
