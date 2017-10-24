import { connect } from 'react-redux';

import { RootState } from '../redux';

export interface StateProps {
  platformName: string | null;
}

export type InjectedProps = StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
  platformName: state.profile.platformName
});

export const withProfile = <P extends {}>(Component: React.ComponentType<P & InjectedProps>) => (
  connect(mapStateToProps)(Component)
);
