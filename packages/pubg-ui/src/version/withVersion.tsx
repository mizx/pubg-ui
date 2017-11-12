import { connect } from 'react-redux';

import { RootState } from '../redux';
import { getVersion } from '../redux/selectors';

export interface VersionProps {
  version?: string;
};

const mapStateToProps = (state: RootState): VersionProps => ({
  version: getVersion(state)
});

export const withVersion = <P extends {}>(Component: React.ComponentType<P & VersionProps>) => (
  connect(mapStateToProps)(Component)
);
