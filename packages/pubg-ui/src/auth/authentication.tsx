import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch } from '../redux';
import { authenticate } from '../redux/auth';

export interface DispatchProps {
  authenticate: typeof authenticate;
}

export type Props = DispatchProps;

export class AuthComponent extends React.Component<Props> {

  componentDidMount() {
    console.log('authenticate');
    this.props.authenticate();
  }

  render() {
    return React.Children.only(this.props.children);
  }

}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators({
  authenticate
}, dispatch);

export default connect(undefined, mapDispatchToProps)(AuthComponent);
