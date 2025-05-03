// src/features/auth/authSlice2.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
};

const authSlice2 = createSlice({
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

// ✅ Selector: used in components instead of raw state access
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const { login, logout } = authSlice2.actions;
export default authSlice2.reducer;
