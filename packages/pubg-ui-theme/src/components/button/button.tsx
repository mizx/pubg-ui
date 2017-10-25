import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, ButtonAction, ButtonProps } from 'pubg-ui';

import styled, { StyledComponentClass } from 'styled';

const MenuButton = styled.button`
  color: ${props => props.theme.button.color};
  font-size: ${props => props.theme.unit(8)};

  &.active, &:active, &:hover {
    color: ${props => props.theme.button.hoverColor};
  }
`;

const MenuButtonSmall = MenuButton.extend`
  font-size: ${props => props.theme.unit(4)};
`;

const NavigationButton = styled.button`
  background: rgba(0, 0, 0, .6);
  color: rgba(255, 255, 255, .4);
  padding: ${props => props.theme.unit(1)} ${props => props.theme.unit(2)};
  font-size: ${props => props.theme.unit(3)};

  &.active, &:active, &:hover {
    color: ${props => props.theme.color.primary};
  }
`;

type ButtonType =
  | 'menu-lg'
  | 'menu-sm'
  | 'navigation'
;

const buttonTypeMap: { [B in ButtonType]: typeof MenuButton } = {
  'menu-lg': MenuButton,
  'menu-sm': MenuButtonSmall,
  'navigation': NavigationButton
};

interface Props extends ButtonProps {
  type?: ButtonType;
  to?: string;
}

export const ButtonComponent: React.SFC<Props & RouteComponentProps<{}>> = props => {
  const { children, history, to, type = 'navigation', ...other } = props;
  const Component = buttonTypeMap[type];

  if (to) {
    other.onClick = () => history.push(to);
  }

  return (
    <Button component={Component} {...other}>
      {children}
    </Button>
  );
};

export default withRouter<Props>(ButtonComponent);
