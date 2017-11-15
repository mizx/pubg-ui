import React from 'react';
import { Manager, Target, Popper } from 'react-popper';

import { Placement } from './types';

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  enterDelay?: number;
  leaveDelay?: number;
  open?: boolean;
  placement?: Placement;
  tooltip: React.ReactNode;
}

export interface State {
  open: boolean;
}

export class TooltipComponent extends React.Component<Props, State> {

  private isControlled: boolean;
  private enterTimer: NodeJS.Timer;
  private leaveTimer: NodeJS.Timer;

  constructor(props: Props) {
    super(props);

    this.isControlled = props.open !== undefined;

    if (!this.isControlled) {
      this.state = { open: false };
    }
  }

  componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }

  handleRequestOpen(event: React.MouseEvent<HTMLElement>) {
    const { enterDelay = 0 } = this.props;

    clearTimeout(this.leaveTimer);

    if (enterDelay > 0) {
      this.leaveTimer = setTimeout(() => this.requestOpen(event), enterDelay);
    } else {
      this.requestOpen(event);
    }
  }

  requestOpen(event: React.MouseEvent<HTMLElement>) {
    if (!this.isControlled) {
      this.setState({ open: true });
    }
  }

  handleRequestClose(event: React.MouseEvent<HTMLElement>) {
    const { leaveDelay = 0 } = this.props;

    clearTimeout(this.leaveTimer);

    if (leaveDelay > 0) {
      this.leaveTimer = setTimeout(() => this.requestClose(event), leaveDelay)
    } else {
      this.requestClose(event);
    }
  }

  requestClose(event: React.MouseEvent<HTMLElement>) {
    if (!this.isControlled) {
      this.setState({ open: false });
    }
  }

  render() {
    const {
      children,
      ref,
      enterDelay,
      leaveDelay,
      open: openValue,
      placement,
      tooltip,
      ...other
    } = this.props;
    const open = true || this.isControlled ? openValue : this.state.open;
    
    return (
      <Manager {...other}>
        <Target>
          <div>Target</div>
        </Target>
        <Popper
          placement={placement}
          eventsEnabled={open}
        >
          <div>Actual Tooltip</div>
        </Popper>
      </Manager>
    )
  }

}

export default TooltipComponent;