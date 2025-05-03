// src/features/whisper/guest-whisper-landing/GuestWhisperLanding.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./guestWhisperLanding.styles";

/**
 * GuestWhisperLanding is shown to unauthenticated users
 * visiting the Whisper feature. Encourages login to proceed.
 */
const GuestWhisperLanding: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <S.Container
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <S.Title>Welcome to Whisper</S.Title>
            <S.Description>
                Join real-time conversations and discover the power of open communication.
                Log in to get started.
            </S.Description>
            <S.LoginButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogin}
            >
                Log In
            </S.LoginButton>
        </S.Container>
    );
};

export default GuestWhisperLanding;
