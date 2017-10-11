import * as React from 'react';

export type LinkType =
  | 'Platform'
  | 'External'
;

export interface Props {
  url: string;
  type?: LinkType;
}

const handleClick = (url: string, type: LinkType) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (type) {
      case 'Platform': {
        window.engine.trigger('ShowWebPageOnPlatform', url);
        return;
      }
      case 'External': {
        window.engine.trigger('OpenExternalBrowser', url);
        return;
      }
    }
  };

export const ButtonLink: React.SFC<Props> = (props) => {
  const { children, type = 'Platform', url } = props;

  return (
    <button onClick={handleClick(url, type)}>
      {children}
    </button>
  );
};

export default ButtonLink;
