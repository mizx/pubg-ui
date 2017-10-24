import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState } from '../redux';

export interface OwnProps {
  prefix?: string;
};

export interface StateProps {
  version: string;
}

export type Props = OwnProps & StateProps;

export const VersionComponent: React.SFC<Props> = props => {
  const { prefix = '', version } = props;

  return `${prefix}${version}` as any;
}

const mapStateToProps = (state: RootState): StateProps => ({
  version: state.app.version
});

export default connect(mapStateToProps)(VersionComponent);
