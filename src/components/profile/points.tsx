import React from 'react';

interface Props {
  total: number;
}

export const PointsComponent: React.SFC<Props> = props => (
  <div style={styles.container}>
    <img
      src="/img/battle-points.png"
      style={styles.icon}
    />
    <div style={styles.text}>{props.total.toLocaleString()}</div>
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {

  },
  icon: {
    width: 20,
    alignSelf: 'center'
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
};

export default PointsComponent;
