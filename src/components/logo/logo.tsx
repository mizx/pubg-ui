import React from 'react';

import styled from 'styled';

interface Props { }

const Logo = styled.img`
  width: 20vw;
  height: auto;
`;

export const LogoComponent: React.SFC<Props> = props => (
  <Logo src="/img/logo.png" />
);

export default LogoComponent;
