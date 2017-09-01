import React from 'react';

import SkewedComponent from 'components/skewed';

interface NavItem {
  label: string;
  route: string;
}

const items: NavItem[] = [
  {
    label: 'home',
    route: '/home'
  },
  {
    label: 'character',
    route: '/character'
  },
  {
    label: 'rewards',
    route: '/rewards'
  },
  {
    label: 'stats',
    route: '/stats'
  },
  {
    label: 'settings',
    route: '/settings'
  }
];

const styles: Styles = {
  container: {
    height: 100,
    background: '#2B3348'
  },
  content: {
    paddingLeft: 200
  },
  ul: {
    display: 'flex',
    listStyleType: 'none',
    color: '#fff',
    textTransform: 'uppercase'
  },
  li: {
    paddingLeft: 20,
    paddingRight: 20
  }
};

const renderNavItem = (item: NavItem) => (
  <li
    key={item.label}
    style={styles.li}
  >
    {item.label}
  </li>
);

const Navigation = () => (
  <SkewedComponent container={styles.container} content={styles.content}>
    <ul style={styles.ul}>
      {items.map(renderNavItem)}
    </ul>
  </SkewedComponent>
);

export default Navigation;
