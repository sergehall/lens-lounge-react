import React, { useEffect } from 'react';
import { env } from '../../config/env/env.service';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  loadProfile,
  loginUser,
  selectAuthLoading,
  selectAuthError,
  selectIsAuthenticated,
} from './authSlice';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    const tryAutoLogin = async () => {
      if (isAuthenticated) return;

      // Attempt to load profile from cookie (via /api/profile)
      const resultAction = await dispatch(loadProfile());

      // If loadProfile failed, and we're in development mode — do dev auto-login
      if (loadProfile.rejected.match(resultAction)) {
        const isDev = env.REACT_APP_ENVIRONMENT === 'development';

        if (isDev) {
          await dispatch(
            loginUser({
              email: 'sergehall@example.com', // Must match mock data
              password: 'hashedPasswordsergehall', // Should match passwordHash in usersMock
            })
          );
        } else {
          console.warn('Auto-login skipped — not in development mode.');
        }
      }
    };

    tryAutoLogin();
  }, [dispatch, isAuthenticated]);

  if (isLoading) {
    return <div> Checking authentication...</div>;
  }

  if (error) {
    console.warn('AuthProvider Error:', error);
  }

  return <>{children}</>;
};

export default AuthProvider;
