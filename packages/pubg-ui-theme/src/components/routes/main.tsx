import React from 'react';
import styled from 'styled';
import { Link } from 'react-router-dom';

import Button from 'components/button';
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
    <Logo />
    <ButtonGroup>
      <Button type="menu-lg" to="/play">
        <Typography type="menu-main">Play</Typography>
      </Button>
      <Button type="menu-lg" to="/character">
        <Typography type="menu-main">Character</Typography>
      </Button>
      <Button type="menu-lg" to="/crates">
        <Typography type="menu-main">Loot Crates</Typography>
      </Button>
      <Button type="menu-sm" to="/friends">
        <Typography type="menu-main-sm">Friends list</Typography>
      </Button>
      <Button type="menu-sm" action="options">
        <Typography type="menu-main-sm">Options</Typography>
      </Button>
      <Button type="menu-sm" action="quit">
        <Typography type="menu-main-sm">Quit</Typography>
      </Button>
    </ButtonGroup>
  </Main>
);

export default MainComponent;
