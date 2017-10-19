import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled';

import Root from './root';
import Main from './main';
import Play from './play';

const Wrapper = styled.div`
  margin: ${props => props.theme.app.margin};
  z-index: 1;
`;

const Routes: React.SFC = props => (
  <Wrapper>
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/main" component={Main} />
      <Route path="/play" component={Play} />
    </Switch>
  </Wrapper>
);

export default Routes;
