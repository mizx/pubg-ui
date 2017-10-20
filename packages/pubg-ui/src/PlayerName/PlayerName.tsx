import React from 'react';
import PropTypes from 'prop-types';

import { ProviderContext } from '../Provider';

export interface Props { }

export const PlayerNameComponent: React.SFC<Props> = (props, context: ProviderContext) => {
  const { auth } = context.pubg;

  // stateless components don't allow string returns?
  return auth ? auth.userDisplayName as any : null;
};

PlayerNameComponent.contextTypes = {
  pubg: PropTypes.object
};

export default PlayerNameComponent;
