import React from 'react';
import styled from 'styled-components';

import Player from './player';
import Video from './video';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

interface Props { }

export const BackgroundComponent: React.SFC<Props> = props => (
  <Background>
    <Player image="/img/player.png" />
    <Video source="/background.webm" />
  </Background>
);

export default BackgroundComponent;
