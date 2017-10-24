import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch } from '../redux';
import { authenticate } from '../redux/auth';
import { getVersion } from '../redux/app';

export interface DispatchProps {
  authenticate: typeof authenticate;
  getVersion: typeof getVersion;
}

export type Props = DispatchProps;

export class WrapperComponent extends React.Component<Props> {

  componentDidMount() {
    this.props.authenticate();
    this.props.getVersion();
  }

  render() {
    return React.Children.only(this.props.children);
  }

}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators({
  authenticate,
  getVersion
}, dispatch);

export default connect(undefined, mapDispatchToProps)(WrapperComponent);
