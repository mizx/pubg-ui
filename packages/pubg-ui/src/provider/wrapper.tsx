import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch } from '../redux';
import { appInitialize } from '../redux/app';

// setInterval(() => socket$.next(Math.random()), 5000);

export interface DispatchProps {
  appInitialize: typeof appInitialize;
}

export type Props = DispatchProps;

export class WrapperComponent extends React.Component<Props> {

  componentDidMount() {
    this.props.appInitialize();
  }

  render() {
    return React.Children.only(this.props.children);
  }

}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      appInitialize,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(WrapperComponent);
