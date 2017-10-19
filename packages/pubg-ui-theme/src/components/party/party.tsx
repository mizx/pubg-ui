import React from 'react';
import styled from 'styled-components';

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
    <Player name="Empty" state="empty" isLeader={false} />
    <Player name="Plural.." state="connecting" isLeader={false} />
    <Player name="Cliff" state="connected" isLeader={false} />
    <Player name="mizx" state="ready" isLeader={true} />
  </Party>
);

export default PartyComponent;
