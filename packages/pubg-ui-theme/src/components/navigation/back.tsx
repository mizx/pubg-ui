import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import styled from 'styled';
import Button from 'components/button';
import Typography from 'components/typography';

interface Props { }

export const BackComponent: React.SFC<RouteComponentProps<Props>> = props => {
  const shouldRender = props.location.pathname !== '/main';

  if (!shouldRender) {
    return null;
  }

  return (
    <Button type="navigation" onClick={() => props.history.goBack()}>
      <Typography type="menu-main-sm">Back</Typography>
    </Button>
  );
};

export default withRouter<Props>(BackComponent);
