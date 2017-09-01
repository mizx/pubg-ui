import React from 'react';

import Play from './play';
import Navigation from './navigation';
import Profile from './profile';

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
};

const ActionBar = () => (
  <div style={styles.container}>
    <Navigation />
    <Profile />
    <Play />
  </div>
);

export default ActionBar;
