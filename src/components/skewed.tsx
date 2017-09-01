import React from 'react';

const offset = 20;

const styles: Styles = {
  container: {
    transform: `skewX(-${offset}deg) translateX(-${offset}px)`,
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    paddingLeft: offset * 2,
    paddingRight: offset * 2,
    transform: `skewX(${offset}deg) translateX(${offset}px)`,
  }
};

interface Props {
  container?: React.CSSProperties;
  content?: React.CSSProperties;
}

const SkewedComponent: React.SFC<Props> = (props) => (
  <div style={{ ...styles.container, ...props.container }}>
    <div style={{ ...styles.content, ...props.content }}>
      {props.children}
    </div>
  </div>
);

export default SkewedComponent;
