import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RootState, Dispatch } from '../redux';
import { FriendMap } from '../redux/friend'

export interface StateProps {
  friends: FriendMap;
}

export type InjectedProps = StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
  friends: state.friend.friends
});

export const withFriends = <P extends {}>(Component: React.ComponentType<P & InjectedProps>) =>
  connect(mapStateToProps)(Component);
