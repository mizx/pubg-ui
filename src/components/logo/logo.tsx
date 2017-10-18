import React from 'react';
import { Version } from 'pubg-ui-core';

import styled from 'styled';
import Typography from 'components/typography';

interface Props {
  version?: boolean;
}

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
  top: 2.8vmin;
  right: 6.6vmin;
`;

export const LogoComponent: React.SFC<Props> = (props) => {
  let VersionComponent = null;

  if (props.version) {
    VersionComponent = (
      <VersionWrapper>
        <Typography type="version">
          <Version />
        </Typography>
      </VersionWrapper>
    )
  }

  return (
    <Logo>
      <LogoImage src="/img/logo.png" />
      {VersionComponent}
    </Logo>
  );
};

export default LogoComponent;
