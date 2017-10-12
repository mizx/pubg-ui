import React from 'react';

interface Props { }

const style: React.CSSProperties = {
  maxWidth: '100%'
};

export const LoadingComponent: React.SFC<Props> = props => (
  <img src="/img/spinner.gif" style={style} />
);

export default LoadingComponent;
