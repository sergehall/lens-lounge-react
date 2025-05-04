import React from 'react';

import * as S from './UnauthenticatedLanding.styles';

interface Props {
  title?: string;
  description?: string;
  onSignIn: () => void;
  onCreateAccount: () => void;
}

/**
 * GuestWhisperLanding is shown to unauthenticated users
 * visiting the Whisper, Showcase feature. Encourages SIGN IN or CREATE ACCOUNT to proceed.
 */
const UnauthenticatedLanding: React.FC<Props> = ({
  title = 'Welcome to Lens Lounge',
  description = 'Please register or sign in to complete your profile and join the\n' +
    '                            community!',
  onSignIn,
  onCreateAccount,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ActionButtonsWrapper>
          <S.ActionButton onClick={onSignIn}>SIGN IN</S.ActionButton>
          <S.DividerText>
            <span>or</span>
          </S.DividerText>
          <S.ActionButton onClick={onCreateAccount}>CREATE ACCOUNT</S.ActionButton>
        </S.ActionButtonsWrapper>
      </S.Content>
    </S.Container>
  );
};

export default UnauthenticatedLanding;
