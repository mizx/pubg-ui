import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import styled from 'styled';

const Back = styled.button`
  padding: ${props => props.theme.unit(2)};
  background: rgba(255, 255, 255, .2);
`;

interface Props { }

export const BackComponent: React.SFC<RouteComponentProps<Props>> = props => {
  const shouldRender = props.location.pathname !== '/main';

  if (!shouldRender) {
    return null;
  }

  return (
    <Back
      onClick={() => props.history.goBack()}
    >
      Back
    </Back>
  );
};

export default withRouter<Props>(BackComponent);
