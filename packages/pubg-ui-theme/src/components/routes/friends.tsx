import React from 'react';
import { withFriends, FriendProps } from 'pubg-ui';

import styled from 'styled';
import Typography from 'components/typography';

const Friends = styled.div`
  flex-direction: column;
`;

interface Props { }

export const FriendsComponent: React.SFC<FriendProps> = props => {
  const { friends } = props;

  const renderFriends = () => {
    const keys = Object.keys(friends);

    return keys.map(friendId => {
      const friend = friends[friendId];

      return (
        <div key={friendId}>{friend.platformName} ({friend.platformId})</div>
      );
    });
  };

  return (
    <Friends>
      {renderFriends()}
    </Friends>
  );
};

export default withFriends<Props>(FriendsComponent);
