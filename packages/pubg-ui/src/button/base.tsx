import React from 'react';

export interface BaseButtonProps extends React.HTMLProps<HTMLButtonElement> {
  component?: React.ReactType;
}

export class BaseButtonComponent extends React.Component<BaseButtonProps> {

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
