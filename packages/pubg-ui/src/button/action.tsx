import React from 'react';

import BaseButton, { BaseButtonProps } from './base';

export type Action =
  | 'options'
  | 'quit'
;

const actionMap: { [A in Action]: string } = {
  options: 'ShowGameOption',
  quit: 'Quit'
};

export interface Props extends BaseButtonProps {
  trigger: Action;
}

const handleClick = (action: Action) => (event: React.MouseEvent<HTMLButtonElement>) => {
  const command = actionMap[action];

  if (command) {
    window.engine.trigger(command);
  }
};

export const ActionButtonComponent: React.SFC<Props> = (props) => {
  const { trigger, children, ref, ...other } = props;

  return (
    <BaseButton onClick={handleClick(trigger)} {...other}>
      {children}
    </BaseButton>
  );
};

export default ActionButtonComponent;
