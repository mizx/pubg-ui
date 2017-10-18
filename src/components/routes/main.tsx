import React from 'react';
import styled from 'styled';
import { Link } from 'react-router-dom';
import { ButtonAction } from 'pubg-ui-core';

import Typography from 'components/typography';
import Logo from 'components/logo';

const Main = styled.div`
  flex-direction: column;
`;

export const MainComponent: React.SFC = props => (
  <Main>
    <Logo version={true} />
    <Link to="/play">
      <Typography type="main">Play</Typography>
    </Link>
    <ButtonAction action="options">
      <Typography type="main-sm">Options</Typography>
    </ButtonAction>
    <ButtonAction action="quit">
      <Typography type="main-sm">Quit</Typography>
    </ButtonAction>
  </Main>
);

export default MainComponent;
