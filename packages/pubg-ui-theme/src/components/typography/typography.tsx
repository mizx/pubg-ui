import React, { CSSProperties } from 'react';

import styled, { StyledComponentClass } from 'styled';

const MenuMain = styled.div`
  font-family: ${props => props.theme.font.display};
  text-transform: uppercase;
`;

const MenuMainSmall = MenuMain.extend`
  letter-spacing: ${props => props.theme.unit(.2)};
`;

const Version = styled.div`
  font-size: ${props => props.theme.unit(1)};
  font-family: ${props => props.theme.font.body};
`;

type Type =
  | 'menu-main'
  | 'menu-main-sm'
  | 'version'
;

interface Props {
  type: Type;
}

// TODO: Not sure how to correctly get strongly typed StyledComponentClass
const typeMap: { [K in Type]: StyledComponentClass } = {
  'menu-main': MenuMain,
  'menu-main-sm': MenuMainSmall,
  'version': Version
};

export const TypeComponent: React.SFC<Props> = props => {
  const Component = typeMap[props.type];

  return (
    <Component>{props.children}</Component>
  );
};

export default TypeComponent;
