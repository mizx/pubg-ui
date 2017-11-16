import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import styled from 'styled';

import Root from './root';
import Auth from './auth';
import Closed from './closed';
import Main from './main';
import Play from './play';
import Friends from './friends';

const Wrapper = styled.div`
  margin: ${props => props.theme.app.margin};
  z-index: 1;
`;

const Routes: React.SFC = props => (
  <Wrapper>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/closed" component={Closed} />
      <Route path="/main" component={Main} />
      <Route path="/play" component={Play} />
      <Route path="/friends" component={Friends} />
    </Switch>
  </Wrapper>
);

export default Routes;
