import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch } from '../redux';

export interface DispatchProps {
}

export type Props = DispatchProps;

// TODO: This component is probably useless now. 
export class WrapperComponent extends React.Component<Props> {

  render() {
    return React.Children.only(this.props.children);
  }

}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(WrapperComponent);
