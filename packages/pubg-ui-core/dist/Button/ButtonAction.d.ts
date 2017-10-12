/// <reference types="react" />
import React from 'react';
export declare type Action = 'quit' | 'options';
export interface Props {
    action: Action;
}
export declare const ButtonAction: React.SFC<Props>;
export default ButtonAction;
