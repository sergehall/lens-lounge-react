// src/features/whisper/WhisperChatPage.tsx
import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../auth/authSlice";
import GuestWhisperLanding from "./guest-whisper-landing/GuestWhisperLanding";
import Chat from "./chat/Chat";

const WhisperChatPage: React.FC = () => {
    // Use the selector from authSlice instead of accessing store manually
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return isAuthenticated ? <Chat /> : <GuestWhisperLanding />;
};

export default WhisperChatPage;
