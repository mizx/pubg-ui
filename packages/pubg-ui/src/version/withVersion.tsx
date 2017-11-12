import { connect } from 'react-redux';

import { RootState } from '../redux';

export interface VersionProps {
  version?: string;
};

const mapStateToProps = (state: RootState): VersionProps => ({
  version: state.app.version
});

export const withVersion = <P extends {}>(Component: React.ComponentType<P & VersionProps>) => (
  connect(mapStateToProps)(Component)
);
