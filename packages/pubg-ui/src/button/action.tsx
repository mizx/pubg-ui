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

const handleClick = (action: Action, onClick?: Function) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    const command = actionMap[action];

    if (command) {
      window.engine.trigger(command);
    }

    // invoke onClick if it was passed through
    if (onClick) {
      onClick(event);
    }
  };

export const ActionButtonComponent: React.SFC<Props> = (props) => {
  const { trigger, onClick, children, ref, ...other } = props;

  return (
    <BaseButton onClick={handleClick(trigger, onClick)} {...other}>
      {children}
    </BaseButton>
  );
};

export default ActionButtonComponent;
