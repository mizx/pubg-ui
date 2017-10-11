import * as React from 'react';

export type Action =
  | 'quit'
  | 'options'
;

const actionMap: { [A in Action]: string } = {
  quit: 'Quit',
  options: 'ShowGameOption'
};

export interface Props {
  action: Action;
}

const handleClick = (action: Action) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    const command = actionMap[action];

    if (command) {
      window.engine.trigger(command);
    }
  };

export const ButtonAction: React.SFC<Props> = (props) => (
  <button onClick={handleClick(props.action)}>
    {props.children}
  </button>
);

export default ButtonAction;
