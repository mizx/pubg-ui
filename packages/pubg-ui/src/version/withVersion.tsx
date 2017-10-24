import { connect } from 'react-redux';

import { RootState } from '../redux';

export interface StateProps {
  version: string | null;
}

export type InjectedProps = StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
  version: state.app.version
});

export const withVersion = <P extends {}>(Component: React.ComponentType<P & InjectedProps>) => (
  connect(mapStateToProps)(Component)
);
