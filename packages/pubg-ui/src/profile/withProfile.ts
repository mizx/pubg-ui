import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../redux';
import { getPlayerPlatformName } from '../redux/selectors';

export interface StateProps {
  platformName?: string;
}

export type InjectedProps = StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
  platformName: getPlayerPlatformName(state)
});

export const withProfile = <P extends {}>(Component: React.ComponentType<P & InjectedProps>) => (
  connect(mapStateToProps)(Component)
);
