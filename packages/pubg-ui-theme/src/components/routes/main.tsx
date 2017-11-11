import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled';
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

interface State {
  AddOrRemoveOnHandler: string;
  storage: string;
}

declare var engine: any;

class TestComponent extends React.Component<{}, State> {

  constructor() {
    super();
  }

  componentDidMount() {

    setInterval(() => this.test(), 500);
  }

  test() {
    this.setState({
      AddOrRemoveOnHandler: typeof engine.AddOrRemoveOnHandler,
      storage: JSON.stringify(Object.keys(window.localStorage))
    });
  }

  render() {
    return JSON.stringify(this.state);
  }
}

export const MainComponent: React.SFC = props => (
  <Main>
    <Logo />
    <ButtonGroup>
      <div>
        <TestComponent />
      </div>
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
