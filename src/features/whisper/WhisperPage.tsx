// src/features/whisper/WhisperPage.tsx
import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../auth/authSlice";
import Chats from "./chats/Chats";
import GuestWhisperLanding from "./GuestWhisperLanding";

const WhisperPage: React.FC = () => {
    // Use the selector from authSlice instead of accessing store manually
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return isAuthenticated ? <Chats /> : <GuestWhisperLanding />;
};

export default WhisperPage;
