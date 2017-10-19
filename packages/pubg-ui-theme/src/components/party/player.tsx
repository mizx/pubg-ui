import React from 'react';
import styled from 'styled-components';

import Loading from 'components/common/loading';

const Player = styled.div`
  margin: ${props => props.theme.unit(.4)};
  align-items: center;
  position: relative;
`;

const Avatar = styled.div`
  width: ${props => props.theme.appBar.height};
  height: ${props => props.theme.appBar.height};
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
  name: string;
  state: PlayerState;
  isLeader: boolean;
}

const getAvatarBasedOnState = (state: PlayerState) => {
  switch (state) {
    case 'connecting': {
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      );
    }
    case 'connected':
    case 'ready': {
      return <img src="/img/profile.jpg" />;
    }
    default: {
      return null;
    }
  }
};

const renderCrownIfLeader = (isLeader: boolean) => (
  isLeader ? <LeaderCrown src="/img/crown.png" /> : null
);

const checkmarkIfReady = (state: PlayerState) => (
  state === 'ready' ? <ReadyCheckmark src="/img/checkmark.png" /> : null
);

export const PlayerComponent: React.SFC<Props> = props => (
  <Player>
    {renderCrownIfLeader(props.isLeader)}
    <Avatar>
      {getAvatarBasedOnState(props.state)}
    </Avatar>
    <span />
    {checkmarkIfReady(props.state)}
  </Player>
);

export default PlayerComponent;
