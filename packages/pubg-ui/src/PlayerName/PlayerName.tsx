import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState } from '../redux';

export interface StateProps {
  name: string;
}

export type Props = StateProps;

export const PlayerNameComponent: React.SFC<Props> = (props) => props.name as any;

const mapStateToProps = (state: RootState): StateProps => ({
  name: state.auth.userDisplayName
});

export default connect(mapStateToProps)(PlayerNameComponent);
