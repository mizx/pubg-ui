import React from 'react';

import styled from 'styled';
import Avatar from 'components/player/avatar';
import Summary from 'components/player/summary';
import Loading from 'components/common/loading';

const Player = styled.div`
  margin: ${props => props.theme.unit(.4)};
  align-items: center;
  position: relative;
`;

const LoadingWrapper = styled.div`
  padding: ${props => props.theme.unit(1)};
`;

const LeaderCrown = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.theme.unit(2)};
  height: ${props => props.theme.unit(2)};
  transform: translateY(-1vmin) rotate(-20deg);
`;

const ReadyCheckmark = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${props => props.theme.unit(2)};
  height: ${props => props.theme.unit(2)};
  transform: translate(${props => props.theme.unit(1)}, ${props => props.theme.unit(1)});
`;

type PlayerState =
  | 'empty'
  | 'connecting'
  | 'connected'
  | 'ready'
;

interface Props {
  name: React.ReactNode;
  avatar: string;
  state: PlayerState;
  isLeader: boolean;
  isLocal: boolean;
}

const renderCrownIfLeader = (isLeader: boolean) => (
  isLeader ? <LeaderCrown src="/img/crown.png" /> : null
);

const checkmarkIfReady = (state: PlayerState) => (
  state === 'ready' ? <ReadyCheckmark src="/img/checkmark.png" /> : null
);

const renderAvatar = (props: Props) => {
  if (props.isLocal) {
    return <Summary name={props.name} avatar={props.avatar} />;
  }

  return <Avatar image={props.avatar} />;
};

export const PlayerComponent: React.SFC<Props> = props => (
  <Player>
    {renderCrownIfLeader(props.isLeader)}
    {checkmarkIfReady(props.state)}
    {renderAvatar(props)}
  </Player>
);

export default PlayerComponent;
