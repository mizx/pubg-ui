import React from 'react';
import styled from 'styled-components';
import { PlayerName } from 'pubg-ui';

import Player from './player';

const Party = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${props => props.theme.app.margin}
`;

interface Props { }

export const PartyComponent: React.SFC<Props> = props => (
  <Party>
    <Player
      name="Empty"
      state="empty"
      isLeader={false}
      isLocal={false}
      avatar="/img/profile.jpg"
    />
    <Player
      name="Plural.."
      state="connecting"
      isLeader={false}
      isLocal={false}
      avatar="/img/profile.jpg"
    />
    <Player
      name="Cliff"
      state="ready"
      isLeader={false}
      isLocal={false}
      avatar="/img/profile.jpg"
    />
    <Player
      name={'mizx'}
      state="connected"
      isLeader={true}
      isLocal={true}
      avatar="/img/profile.jpg"
    />
  </Party>
);

export default PartyComponent;
