import React, { CSSProperties } from 'react';

interface Props { }

const style: CSSProperties = {
  position: 'absolute',
  top: '6vh',
  right: 0,
  width: '20vw'
};

export const LogoComponent: React.SFC<Props> = props => (
  <img
    src="/logo.png"
    style={style}
  />
);

export default LogoComponent;
