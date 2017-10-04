import React from 'react';

interface Props {
  url: string;
}

export const AvatarComponent: React.SFC<Props> = props => (
  <img
    src={props.url}
    style={style}
  />
);

const style: React.CSSProperties = {
  width: 120,
  alignSelf: 'center'
};

export default AvatarComponent;
