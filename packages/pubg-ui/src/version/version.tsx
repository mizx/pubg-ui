import React from 'react';

import { withVersion, VersionProps } from './withVersion';

export interface Props {
  prefix?: string;
}

export const VersionComponent: React.SFC<Props & VersionProps> = props => {
  const { prefix = '', version } = props;

  if (!version) {
    return null;
  }

  return `${prefix}${version}` as any;
}

export default withVersion(VersionComponent);
