import React from 'react';

import styled, { keyframes } from '../../styled';

const AuthPage = styled.div`
  flex-direction: column;
  background: ${props => props.theme.palette.common.darkBlack};
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const rotate360 = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(90deg); }
  100% { transform: rotate(90deg); }
`;

const AuthLoader = styled.div`
  width: 4vmin;
  height: 4vmin;
  margin: 2vmin;
  background: ${props => props.theme.color.primary};
  animation: ${rotate360} .75s linear infinite;
`;

const AuthText = styled.div`
  color: ${props => props.theme.palette.common.white};
`;

export const AuthComponent: React.SFC = () => (
  <AuthPage>
    <AuthLoader />
    <AuthText>authenticating</AuthText>
  </AuthPage>
);

export default AuthComponent;
