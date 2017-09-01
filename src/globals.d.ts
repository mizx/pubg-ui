import React from 'react';

declare global {
  interface Styles {
    [key: string]: React.CSSProperties;
  }
}
