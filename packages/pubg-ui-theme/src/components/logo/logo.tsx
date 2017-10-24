import React from 'react';
import { withVersion, VersionProps } from 'pubg-ui';

import styled from 'styled';
import Typography from 'components/typography';

interface OwnProps { }
type Props = OwnProps & VersionProps;

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

const renderIfVersion = (props: Props) => {
  if (!props.version) {
    return null;
  }

  return (
    <VersionWrapper>
      <Typography type="version">v{props.version}</Typography>
    </VersionWrapper>
  );
};

export const LogoComponent: React.SFC<Props> = (props) => (
  <Logo>
    <LogoImage src="/img/logo.png" />
    {renderIfVersion(props)}
  </Logo>
);

export default withVersion(LogoComponent);
