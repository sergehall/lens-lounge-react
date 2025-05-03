// src/features/whisper/guest-whisper-landing/guestWhisperLanding.styles.ts
import styled from "styled-components";
import { motion } from "framer-motion";

/**
 * Container holds the entire guest landing UI.
 * Uses motion for entry animation.
 */
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 150px); /* Leaves space for header */
  text-align: center;
  padding: 20px;
`;

/** Page title */
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

/** Description text below the title */
export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 500px;
`;

/**
 * Login button styled with motion effects.
 */
export const LoginButton = styled(motion.button)`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;
