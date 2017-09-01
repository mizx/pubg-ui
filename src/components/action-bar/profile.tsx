import React from 'react';
// import styled from 'styled-components';

import SkewedComponent from 'components/skewed';

const styles: Styles = {
  circle: {
    width: 16,
    height: 16,
    background: '#E9AE36',
    margin: 6,
    borderRadius: '100%'
  },
  container: {
    background: 'rgba(0, 0, 0, .4)'
  },
  content: {
    color: '#fff',
    display: 'flex',
    paddingLeft: 200,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  }
};

const Profile: React.SFC = () => (
  <SkewedComponent container={styles.container} content={styles.content}>
    <div>ThisWillBeYourName</div>
    <div style={styles.circle} />
    <div>29,921</div>
  </SkewedComponent>
);

export default Profile;
