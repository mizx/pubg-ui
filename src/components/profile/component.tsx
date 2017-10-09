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
      <Avatar url={'/img/profile.jpg'} />
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
