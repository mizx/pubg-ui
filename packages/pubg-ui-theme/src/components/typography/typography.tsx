import React, { CSSProperties } from 'react';

import styled from 'styled';

const MainLarge = styled.div`
  font-size: ${props => props.theme.unit(8)};
  font-family: ${props => props.theme.font.display};
  text-transform: uppercase;
`;

const MainSmall = styled.div`
  font-size: ${props => props.theme.unit(4)};
  font-family: ${props => props.theme.font.display};
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.unit(.2)}
`;

const Version = styled.div`
  font-size: ${props => props.theme.unit(1)};
  font-family: ${props => props.theme.font.body};
`;

type Type =
  | 'main'
  | 'main-sm'
  | 'version'
;

interface Props {
  type: Type;
}

// TODO: Not sure how to correctly get strongly typed StyledComponentClass
const typeMap: { [K in Type]: typeof MainLarge } = {
  'main': MainLarge,
  'main-sm': MainSmall,
  'version': Version
};

export const TypeComponent: React.SFC<Props> = props => {
  const Component = typeMap[props.type];

  return (
    <Component>{props.children}</Component>
  );
};

export default TypeComponent;
