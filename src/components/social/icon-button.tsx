import React from 'react';

import FacebookIcon from './icon/facebook';

interface Props {
  url: string;
}

const style: React.CSSProperties = {
  color: 'rgba(255, 255, 255, .6)',
  marginLeft: 6,
  marginRight: 6
};

const onClick = (url: string) => {
  window.engine.trigger('ShowWebPageOnPlatform', url);
};

export const IconButtonComponent: React.SFC<Props> = ({ url, children }) => (
  <button
    onClick={() => onClick(url)}
    style={style}
  >
    {children}
  </button>
);

export default IconButtonComponent;
