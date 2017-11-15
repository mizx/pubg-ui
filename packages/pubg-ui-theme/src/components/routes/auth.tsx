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

const xAxis = keyframes`
  0%    { transform: translateX(-200%); }
  20%   { transform: translateX(0%); }
  25%   { transform: translateX(-50%); }
  30%   { transform: translateX(0%); }
  50%   { transform: translateX(200%); }
  70%   { transform: translateX(0%); }
  75%   { transform: translateX(50%); }
  80%   { transform: translateX(0%);}
  100%  { transform: translateX(-200%); }
`;

const yAxis = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  10% {
    opacity: 0.8;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(-200%);
  }
`;

const loaderSize = '1vmin';

const AuthLoader = styled.div`
  margin: 4vmin;
  animation: ${xAxis} 3s infinite ease-in-out;

  &::after {
    content: '';
    display: block;
    background: ${props => props.theme.color.primary};
    width: ${loaderSize};
    height: ${loaderSize};
    animation: ${yAxis} 1s infinite ease-in-out;
    border-radius: 100%;
  }
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
