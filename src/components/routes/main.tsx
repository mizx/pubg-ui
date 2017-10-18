import React from 'react';
import styled from 'styled';
import { Version } from 'pubg-ui-core';

import Typography from 'components/typography';
import Logo from 'components/logo';

const Main = styled.div`
  flex-direction: column;
`;

export const MainComponent: React.SFC = props => (
  <Main>
    <Logo />
    <Typography type="version"><Version /></Typography>
    <Typography type="main">Main Menu</Typography>
  </Main>
);

export default MainComponent;
