import React from 'react';
import styled from 'styled-components';

const Player = styled.img`
  display: block;
  position: fixed;
  top: 6vh;
  left: 50%;
  height: 94vh;
  width: auto;
  transform: translateX(-50%);
`;

interface Props {
  image: string;
}

export const PlayerComponent: React.SFC<Props> = props => (
  <Player src={props.image} />
);

export default PlayerComponent;
