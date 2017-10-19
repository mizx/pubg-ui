import React from 'react';

interface Props {
  title?: string;
}

const style: React.CSSProperties = {
  display: 'inline-block',
  fill: 'currentColor',
  height: 24,
  width: 24,
  userSelect: 'none'
};

export const SvgComponent: React.SFC<Props> = ({ title, children }) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    style={style}
  >
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
);

export default SvgComponent;
