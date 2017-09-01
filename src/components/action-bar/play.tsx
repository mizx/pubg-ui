import React from 'react';

import SkewedComponent from 'components/skewed';

const styles: Styles = {
  container: {
    height: 140,
    backgroundImage: 'linear-gradient(to right, #9E4412, #F0AF2E)',
    color: '#fff',
    fontSize: 50,
    position: 'absolute',
    top: 0,
    left: 0
  }
};

const Play: React.SFC = () => (
  <SkewedComponent container={styles.container}>
    PLAY
  </SkewedComponent>
);

export default Play;
