import React from 'react';

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  component?: React.ReactType;
}

export class BaseButtonComponent extends React.Component<Props> {

  render() {
    const { component, children, ...props } = this.props;
    const Component = component || 'button';

    return (
      <Component {...props}>
        {children}
      </Component>
    );
  }

}

export default BaseButtonComponent;
