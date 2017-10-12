import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100vw;
  min-height: 100vh;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
`;

interface Props {
  source: string;
}

export const VideoComponent: React.SFC<Props> = props => (
  <Video autoPlay={true} loop={true}>
    <source src={props.source} />
  </Video>
);

export default VideoComponent;
