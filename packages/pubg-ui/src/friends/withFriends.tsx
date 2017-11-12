import { connect } from 'react-redux';

import { RootState } from '../redux';
import { FriendMap } from '../redux/friend'
import { getFriends } from '../redux/selectors';

export interface StateProps {
  friends: FriendMap;
}

export type InjectedProps = StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
  friends: getFriends(state)
});

export const withFriends = <P extends {}>(Component: React.ComponentType<P & InjectedProps>) =>
  connect(mapStateToProps)(Component);
// 