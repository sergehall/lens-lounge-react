// src/features/whisper/GuestWhisperLanding.tsx
import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const GuestWhisperLanding: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login"); // редирект на страницу логина
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "calc(100vh - 150px)", // учитываем высоту шапки
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1 style={{fontSize: "2.5rem", marginBottom: "1rem"}}>Добро пожаловать в Whisper</h1>
            <p style={{fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "500px"}}>
                Откройте мир общения в реальном времени. Войдите, чтобы присоединиться к сообществу!
            </p>
            <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={handleLogin}
                style={{
                    backgroundColor: "#4f46e5",
                    color: "#ffffff",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                Войти
            </motion.button>
        </motion.div>
    );
};

export default GuestWhisperLanding;
