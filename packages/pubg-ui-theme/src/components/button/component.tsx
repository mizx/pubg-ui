import React, { CSSProperties } from 'react';

type States =
  | 'base'
  | 'hover'
;

const styles: { [K in States]: CSSProperties } = {
  base: {
    color: '#999',
    cursor: 'pointer'
  },
  hover: {
    color: '#fefefe'
  }
};

interface Props {
  onClick?: Function;
}

interface State {
  hover: boolean;
}

export class ButtonComponent extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = {
      hover: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  onClick() {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }

  render() {
    const { children } = this.props;
    const style = this.state.hover ? { ...styles.base, ...styles.hover } : styles.base;

    return (
      <button
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        style={style}
      >
        {children}
      </button>
    );
  }
}

export default ButtonComponent;
