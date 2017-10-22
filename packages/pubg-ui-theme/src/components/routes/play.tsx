import React from 'react';

import Typography from 'components/typography';
import styled from 'styled';

const Button = styled.button`
  padding: ${props => props.theme.unit(1)};
  margin: ${props => props.theme.unit(.6)};

  &.active {
    color: #fff;
  }
`;

const Play = styled.div`
  flex-direction: column;
`;

type Region =
| 'na'
| 'eu'
| 'as'
| 'jp'
| 'oc'
| 'sa'
| 'sea'
;

const regionMap: { [key in Region]: string } = {
  na: 'North America',
  eu: 'Europe',
  as: 'Asia',
  jp: 'Japan',
  oc: 'Oceanic',
  sa: 'South America',
  sea: 'Sea'
};

type Squad =
  | 'solo'
  | 'duo'
  | 'squad'
;

const squadMap: { [key in Squad]: string } = {
  solo: 'Solo',
  duo: 'Duo',
  squad: 'Squad'
};

type Mode =
  | 'tpp'
  | 'fpp'
;

const modeMap: { [key in Mode]: string } = {
  fpp: 'First-Person',
  tpp: 'Third-Person'
};

interface Props { }

interface State {
  region: Region;
  squad: Squad;
  mode: Mode;
}

export class PlayComponent extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = {
      region: 'na',
      squad: 'solo',
      mode: 'fpp'
    };
  }

  setRegion(region: Region) {
    this.setState({ region });
  }

  setSquad(squad: Squad) {
    this.setState({ squad });
  }

  setMode(mode: Mode) {
    this.setState({ mode });
  }

  renderRegions() {
    return Object.keys(regionMap).map((region: Region) => {
      const regionName = regionMap[region];
      const className = region === this.state.region ? 'active' : '';

      return (
        <Button
          key={region}
          className={className}
          onClick={() => this.setRegion(region)}
        >
          {regionName}
        </Button>
      );
    });
  }

  renderSquads() {
    return Object.keys(squadMap).map((squad: Squad) => {
      const squadName = squadMap[squad];
      const className = squad === this.state.squad ? 'active' : '';

      return (
        <Button
          key={squad}
          className={className}
          onClick={() => this.setSquad(squad)}
        >
          {squadName}
        </Button>
      );
    });
  }

  renderModes() {
    return Object.keys(modeMap).map((mode: Mode) => {
      const modeName = modeMap[mode];
      const className = mode === this.state.mode ? 'active' : '';

      return (
        <Button
          key={mode}
          className={className}
          onClick={() => this.setMode(mode)}
        >
          {modeName}
        </Button>
      );
    });
  }

  render() {
    return (
      <Play>
      <Typography type="main-sm">Region</Typography>
      <div>
        {this.renderRegions()}
      </div>
      <Typography type="main-sm">Squad Size</Typography>
      <div>
        {this.renderSquads()}
      </div>
      <Typography type="main-sm">Perspective</Typography>
      <div>
        {this.renderModes()}
      </div>
      </Play>
    );
  }
}

export default PlayComponent;
