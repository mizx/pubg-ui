import React from 'react';

export interface StateProps {
  version: string;
}

export interface OwnProps { }

type Props = OwnProps & StateProps;

const VersionComponent: React.SFC<Props> = (props) => (
  <span>{props.version}</span>
);

export default VersionComponent;
