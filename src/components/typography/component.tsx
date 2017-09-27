import React, { CSSProperties } from 'react';

type Type =
  | 'display1' // logo
  | 'display2' // large button
  | 'display3' // small button
  | 'profile'
;

interface Props {
  type: Type;
  bottomGutter?: boolean;
}

const styles: { [K in Type]: CSSProperties } = {
  display1: {
    fontSize: 80,
    fontFamily: 'Headliner45, sans-serif'
  },
  display2: {
    fontSize: 70,
    fontFamily: 'Headliner45, sans-serif'
  },
  display3: {
    fontSize: 30,
    fontFamily: 'Headliner45, sans-serif'
  },
  profile: {
    fontSize: 40,
    fontFamily: 'sans-serif'
  }
};

export const TypeComponent: React.SFC<Props> = props => {
  const style = styles[props.type];
  const bottomGutter = props.bottomGutter ? 20 : 0;

  return (
    <div
      style={{ ...style, marginBottom: bottomGutter }}
    >
      {props.children}
    </div>
  );
};

export default TypeComponent;
