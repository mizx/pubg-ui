import React, { CSSProperties } from 'react';

interface Props { }

const style: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '20%'
};

export const LogoComponent: React.SFC<Props> = props => (
  <img
    src="/logo.png"
    style={style}
  />
);

export default LogoComponent;
