import React from 'react';
import { Redirect } from 'react-router-dom';

export const RootComponent: React.SFC = props => (
  <Redirect to="/main" />
);

export default RootComponent;
