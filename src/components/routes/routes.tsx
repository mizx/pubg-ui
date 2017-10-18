import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled';

import Root from './root';
import Main from './main';
import Play from './play';

const Wrapper = styled.div`
  padding: 2vh 2vw;
  z-index: 1;
`;

const Routes: React.SFC = props => (
  <Wrapper>
    <Switch>
      <Route path="/" exact={true} component={Root} />
      <Route path="/main" component={Main} />
      <Route path="/play" component={Play} />
    </Switch>
  </Wrapper>
);

export default Routes;
