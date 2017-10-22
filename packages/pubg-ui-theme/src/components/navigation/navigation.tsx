import React from 'react';

import styled from 'styled';
import BackButton from './back';

const Navigation = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: ${props => props.theme.app.margin};
`;

interface Props { }

export const NavigationComponent: React.SFC<Props> = props => (
  <Navigation>
    <BackButton />
  </Navigation>
);

export default NavigationComponent;
