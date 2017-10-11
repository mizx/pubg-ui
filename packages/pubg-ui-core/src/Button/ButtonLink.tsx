import * as React from 'react';

export type LinkType =
  | 'platform'
  | 'external'
;

export interface Props {
  url: string;
  type?: LinkType;
}

const handleClick = (url: string, type: LinkType) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (type) {
      case 'platform': {
        window.engine.trigger('ShowWebPageOnPlatform', url);
        return;
      }
      case 'external': {
        window.engine.trigger('OpenExternalBrowser', url);
        return;
      }
    }
  };

export const ButtonLink: React.SFC<Props> = (props) => {
  const { children, type = 'platform', url } = props;

  return (
    <button onClick={handleClick(url, type)}>
      {children}
    </button>
  );
};

export default ButtonLink;
