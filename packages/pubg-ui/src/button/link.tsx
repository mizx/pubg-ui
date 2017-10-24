import React from 'react';

import BaseButton, { BaseButtonProps } from './base';

export const TYPE_PLATFORM = 'platform';
export type TYPE_PLATFORM = typeof TYPE_PLATFORM;
export const TYPE_EXTERNAL = 'external';
export type TYPE_EXTERNAL = typeof TYPE_EXTERNAL;

export type LinkType =
  | TYPE_PLATFORM
  | TYPE_EXTERNAL
;

export interface Props extends BaseButtonProps {
  url: string;
  type?: LinkType;
}

const handleClick = (url: string, type: LinkType, onClick?: Function) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (type) {
      case TYPE_PLATFORM: {
        window.engine.trigger('ShowWebPageOnPlatform', url);
        break;
      }
      case TYPE_EXTERNAL: {
        window.engine.trigger('OpenExternalBrowser', url);
        break;
      }
    }

    // invoke onClick if it was passed through
    if (onClick) {
      onClick(event);
    }
  };

export const LinkButtonComponent: React.SFC<Props> = (props) => {
  const { children, onClick, type = TYPE_PLATFORM, url, ref, ...other } = props;

  return (
    <BaseButton onClick={handleClick(url, type, onClick)} {...other}>
      {children}
    </BaseButton>
  );
}

export default LinkButtonComponent;
