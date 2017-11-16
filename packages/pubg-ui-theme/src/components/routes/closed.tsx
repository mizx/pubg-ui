import React from 'react';

import styled from '../../styled';

const Closed = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.palette.common.darkBlack};
  align-items: center;
  justify-content: center;
`;

const ClosedText = styled.div`
  color: ${props => props.theme.palette.common.lightWhite};
`;

export const ClosedComponent: React.SFC = () => (
  <Closed>
    <ClosedText>Connection closed.</ClosedText>
  </Closed>
);

export default ClosedComponent;
