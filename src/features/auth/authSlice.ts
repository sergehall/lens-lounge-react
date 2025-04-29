// src/features/auth/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

// ✅ Selector — this is the clean way
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
