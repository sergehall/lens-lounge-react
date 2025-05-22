// src/features/whisper/navigationButtons.styles.ts
import styled from 'styled-components';

export const ButtonSegment = styled.div`
  padding: 10px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border-radius: 8px;
  position: sticky;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  box-shadow: ${({ theme }) => theme.box.boxShadowNeon};
  bottom: 0;
  transition:
    color 0.3s,
    background-color 0.3s;

  .tab-button {
    position: relative;
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.contacts.userBgActiveColor};
    color: ${({ theme }) => theme.text.softWhite};
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* важно для layoutId-анимации */

    &:hover {
      background-color: ${({ theme }) => theme.dialogs.buttonHoverColor};
      color: ${({ theme }) => theme.text.softWhite};
    }

    &.active {
      font-weight: bold;
      color: ${({ theme }) => theme.text.softWhite};
    }
  }

  .active-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: ${({ theme }) => theme.text.softWhite};
    border-radius: 2px 2px 0 0;
    box-shadow: 0 0 6px ${({ theme }) => theme.text.softWhite};
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .tab-button {
      width: 100%;
      font-size: 14px;
    }
  }
`;
