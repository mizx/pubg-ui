import React from 'react';
import styled from 'styled';
import { Link } from 'react-router-dom';
import { ButtonAction, PlayerName } from 'pubg-ui';

import Typography from 'components/typography';
import Logo from 'components/logo';

const Main = styled.div`
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  flex-direction: column;
  margin-top: ${props => props.theme.unit(10)};
`;

export const MainComponent: React.SFC = props => (
  <Main>
    <Logo version={true} />
    <ButtonGroup>
      <Link to="/play">
        <Typography type="main">Play</Typography>
      </Link>
      <Link to="/character">
        <Typography type="main">Character</Typography>
      </Link>
      <Link to="/crates">
        <Typography type="main">Loot Crates</Typography>
      </Link>
      <Link to="/friends">
        <Typography type="main-sm">Friends list</Typography>
      </Link>
      <ButtonAction action="options">
        <Typography type="main-sm">Options</Typography>
      </ButtonAction>
      <ButtonAction action="quit">
        <Typography type="main-sm">Quit</Typography>
      </ButtonAction>
    </ButtonGroup>
  </Main>
);

export default MainComponent;
