import React from 'react';

import styled from 'styled';

const Avatar = styled.img`
  width: ${props => props.theme.appBar.height};
  height: ${props => props.theme.appBar.height};
`;

interface Props {
  image: string;
}

export const AvatarComponent: React.SFC<Props> = props => (
  <Avatar src={props.image} />
);

export default AvatarComponent;
