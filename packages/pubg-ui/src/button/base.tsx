import React from 'react';

export interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
  component?: React.ReactType;
}

export class ButtonBaseComponent extends React.Component<ButtonBaseProps> {

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
