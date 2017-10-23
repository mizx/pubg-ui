import React from 'react';
import PropTypes from 'prop-types';

import { PreferenceOptions } from './interfaces';
import { SetPreference } from './types';
import { ProviderContext } from '../Provider';

export interface PreferenceProps {
  preferences: PreferenceOptions;
  setPreference: SetPreference;
}

export const withPreferences = <P extends {}>(Component: React.ComponentType<P & Partial<PreferenceProps>>) => {
  const C: React.SFC<P & Partial<PreferenceProps>> = (props, context: ProviderContext) => (
    <Component {...props} preferences={context.pubg.preference} setPreference={context.pubg.action.setPreference} />
  );

  C.contextTypes = {
    pubg: PropTypes.shape({
      preference: PropTypes.object.isRequired,
      action: PropTypes.object.isRequired
    })
  };

  C.displayName = `withPreferences(${Component.displayName})`;

  return C;
}
