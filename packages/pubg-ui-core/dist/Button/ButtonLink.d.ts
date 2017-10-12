/// <reference types="react" />
import React from 'react';
export declare type LinkType = 'platform' | 'external';
export interface Props {
    url: string;
    type?: LinkType;
}
export declare const ButtonLink: React.SFC<Props>;
export default ButtonLink;
