// src/features/auth/authSlice2.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { DEFAULT_PROFILE, Profile } from '../showcase/profile/mocks/defaultProfile';

// Auth state includes the current user and login status
interface AuthState {
  isAuthenticated: boolean;
  profile: Profile | null;
}

// Initial state — assume user is logged in (easy to remove later)
const initialState: AuthState = {
  isAuthenticated: false, // <-- simulate logged-in user
  profile: DEFAULT_PROFILE, // <-- simulate user profile loaded
};

// Async thunk to load profile when logging in
export const loginUser = createAsyncThunk('auth/loginUser', async () => {
  // Simulate a backend call
  return DEFAULT_PROFILE;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.profile = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isAuthenticated = true;
      state.profile = action.payload;
    });
  },
});

// Selectors to use in UI
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectProfile = (state: RootState) => state.auth.profile;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
