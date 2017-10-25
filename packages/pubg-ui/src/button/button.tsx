import React from 'react';

import ButtonBase, { Props as ButtonBaseProps } from './base';

export type Action =
  | 'options'
  | 'url'
  | 'quit'
;

export interface Props extends ButtonBaseProps {
  action?: Action;
  external?: boolean;
  url?: string;
}

type ButtonClick = React.MouseEvent<HTMLButtonElement>;

const handleClick = (props: Props) => (event: ButtonClick) => {
  const { action, external, url, onClick } = props;

  if (onClick) {
    onClick(event);
  }

  switch (action) {
    case 'url': {
      if (!url) {
        break;
      }

      if (external) {
        window.engine.trigger('OpenExternalBrowser', url);
      } else {
        window.engine.trigger('ShowWebPageOnPlatform', url);
      }
      return;
    }
    case 'options': {
      window.engine.trigger('ShowGameOption');
      return;
    }
    case 'quit': {
      window.engine.trigger('Quit');
      return;
    }
  }
};

export const ButtonComponent: React.SFC<Props> = props => {
  const { children, ref, ...other } = props;

  return (
    <ButtonBase onClick={handleClick(props)} {...other}>
      {children}
    </ButtonBase>
  )
}

export default ButtonComponent;
