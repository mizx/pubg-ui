import React from 'react';
import styled from 'styled-components';

import Loading from 'components/common/loading';

const Player = styled.div`
  background: rgba(0, 0, 0, .4);
  padding: 1vmin;
  margin: .4vmin;
  align-items: center;
  position: relative;
`;

const Avatar = styled.div`
  width: 5vmin;
  height: 5vmin;
`;

const Name = styled.div`
  font-size: 2vmin;
  padding: 0 2vmin;
  color: #fff;
`;

const LoadingWrapper = styled.div`
  padding: 1vmin;
`;

const LeaderCrown = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 2vmin;
  height: 2vmin;
  transform: rotate(-20deg);
`;

const ReadyCheckmark = styled.img`
  width: 3vmin;
  height: 3vmin;
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
      return <img src="/img/profile.jpg" />
    }
    default: {
      return null;
    }
  }
};

const renderCrownIfLeader = (isLeader: boolean) => {
  return isLeader ? <LeaderCrown src="/img/crown.png" /> : null;
};

const checkmarkIfReady = (state: PlayerState) => {
  return state === 'ready' ? <ReadyCheckmark src="/img/checkmark.png" /> : null
};

export const PlayerComponent: React.SFC<Props> = props => {

  return (
    <Player>
      {renderCrownIfLeader(props.isLeader)}
      <Avatar>
        {getAvatarBasedOnState(props.state)}
      </Avatar>
      <Name>{props.name}</Name>
      <span />
      {checkmarkIfReady(props.state)}
    </Player>
  );
};

export default PlayerComponent;
