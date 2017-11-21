import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Dispatch } from '../redux';
import ButtonBase, { Props as ButtonBaseProps } from './base';
import { toggleReady } from '../redux/matchmake';
import store from '../redux/store';

export interface DispatchProps {
  toggleReady: Function;
}

export type Action =
  | 'play'
  | 'options'
  | 'url'
  | 'quit'
;

export interface OwnProps extends ButtonBaseProps {
  action?: Action;
  external?: boolean;
  url?: string;
}

export type Props = OwnProps & DispatchProps;

type ButtonClick = React.MouseEvent<HTMLButtonElement>;

const handleClick = (props: Props) => (event: ButtonClick) => {
  const { action, external, url, onClick, toggleReady } = props;

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
    case 'play': {
      props.toggleReady();
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
  const { children, ref, toggleReady, ...other } = props;

  return (
    <ButtonBase onClick={handleClick(props)} {...other}>
      {children}
    </ButtonBase>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators({
  toggleReady
}, dispatch);

const enhancer = compose<Props, OwnProps>(
  connect(null, mapDispatchToProps)
);

export default enhancer(ButtonComponent);
