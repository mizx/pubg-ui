import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch, RootState } from '../redux';

export interface DispatchProps {

}

export interface StateProps {

}

export type Props = DispatchProps & StateProps;

export interface State {

}

export class WebsocketComponent extends React.Component<Props> {

  connection: WebSocket;

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const mapStateToProps = (state: RootState): StateProps => ({

})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {  },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WebsocketComponent);
