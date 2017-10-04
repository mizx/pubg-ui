import React from 'react';

import Alias from './alias';
import Avatar from './avatar';
import Points from './points';

interface Props { }

export const ProfileComponent: React.SFC<Props> = props => (
  <div style={styles.container}>
    <div style={styles.left}>
      <Alias name={'mizx'} />
    </div>
    <div style={styles.right}>
      <Points total={1337} />
      <Avatar url={'http://cdn.edgecast.steamstatic.com/steamcommunity/public/images/avatars/f5/f5871fb821ca0f02fd642fdb260631b263904e35_full.jpg'} />
    </div>
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  left: {
    alignItems: 'flex-end'
  },
  right: {
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default ProfileComponent;
