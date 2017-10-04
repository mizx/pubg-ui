import React from 'react';

interface Props {
  name: string;
}

export const AliasComponent: React.SFC<Props> = props => (
  <div style={style}>{props.name}</div>
);

const style: React.CSSProperties = {
  fontSize: '4rem',
  color: '#fff'
};

export default AliasComponent;
