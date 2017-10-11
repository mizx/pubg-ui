import React, { CSSProperties } from 'react';

import './App.css';
import Logo from 'components/logo';
import Typography from 'components/typography';
import Button from 'components/button';
// import Version from 'components/version';
import Profile from 'components/profile';
import SocialTray from 'components/social';
import { Version } from 'pubg-ui-core';
import { ButtonLink, ButtonAction } from 'pubg-ui-core';

const styles: { [key: string]: CSSProperties } = {
  main: {
    flexDirection: 'column',
    marginTop: '4vw',
    marginLeft: '4vw'
  }
};

interface Props { }

interface State {
  version?: string;
}

class App extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = { };
  }

  componentDidMount() {
    this.getVersion();
  }

  getVersion() {
    window.engine.call('GetGameVersion')
      .then((version: string) => this.setState({ version }));
  }

  render() {
    return (
      <div>
        <Logo />
        <Profile />
        <SocialTray />
        <div style={styles.main}>
          <ButtonLink url="https://www.google.com">
            <Typography type="display2">Google Platform</Typography>
          </ButtonLink>
          <ButtonLink url="http://www.google.com" type="external">
            <Typography type="display2">Google External</Typography>
          </ButtonLink>
          <ButtonAction action="options">
            <Typography type="display2">Options</Typography>
          </ButtonAction>
          <ButtonAction action="quit">
            <Typography type="display2" bottomGutter={true}>Quit</Typography>
          </ButtonAction>
          <Button onClick={() => window.engine.trigger('ShowGameOption')}>
            <Typography type="display3">Settings</Typography>
          </Button>
          <Button>
            <Typography type="display3">Patch Notes <Version /></Typography>
          </Button>
          <Button onClick={() => window.engine.trigger('Quit')}>
            <Typography type="display3">Quit</Typography>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
