import React from 'react';
import PropTypes from 'prop-types';

import { ProviderContext } from '../Provider';

export interface Props { }

export const PlayerNameComponent: React.SFC<Props> = (props, context: ProviderContext) => {
  const { auth } = context.pubg;
  if (auth) {
    return <div>{auth.userDisplayName}</div>;
  }
  return null;
};

PlayerNameComponent.contextTypes = {
  pubg: PropTypes.object
};

export default PlayerNameComponent;
