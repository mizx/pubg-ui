import React from 'react';

import styled from 'styled';
import Avatar from './avatar';

const Summary = styled.div`
  background: rgba(0, 0, 0, .6);
  width: ${props => props.theme.unit(26)};
`;

const SummaryText = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.unit(1)};
  color: ${props => props.theme.color.primary};
  font-weight: 700;
  font-size: ${props => props.theme.unit(2)}
`;

interface Props {
  name: string;
  avatar: string;
}

export const SummaryComponent: React.SFC<Props> = props => (
  <Summary>
    <Avatar image={props.avatar} />
    <SummaryText>
      {props.name}
    </SummaryText>
  </Summary>
);

export default SummaryComponent;
