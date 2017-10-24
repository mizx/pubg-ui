import React from 'react';
import { Version } from 'pubg-ui';

import styled from 'styled';
import Typography from 'components/typography';

interface Props { }

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  position: relative;
  width: 20vw;
`;

const VersionWrapper = styled.div`
  position: absolute;
  bottom: 70%;
  left: 78%;
`;

export const LogoComponent: React.SFC<Props> = (props) => (
  <Logo>
    <LogoImage src="/img/logo.png" />
    <VersionWrapper>
      <Typography type="version"><Version prefix="v" /></Typography>
    </VersionWrapper>
  </Logo>
);

export default LogoComponent;
