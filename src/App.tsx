import React, { CSSProperties } from 'react';

import './App.css';
import Logo from 'components/logo';
import Typography from 'components/typography';
import Button from 'components/button';

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
        <Typography type="display1">
          Version: {this.state.version}
        </Typography>
        <div style={styles.main}>
          <Button>
            <Typography type="display2">Character</Typography>
          </Button>
          <Button>
            <Typography type="display2">Leaderboards</Typography>
          </Button>
          <Button>
            <Typography type="display2" bottomGutter={true}>Marketplace</Typography>
          </Button>
          <Button onClick={() => window.engine.trigger('ShowGameOption')}>
            <Typography type="display3">Settings</Typography>
          </Button>
          <Button>
            <Typography type="display3">Patch Notes</Typography>
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
