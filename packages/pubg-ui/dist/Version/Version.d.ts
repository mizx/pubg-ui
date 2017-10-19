/// <reference types="react" />
import React from 'react';
import 'rxjs/add/observable/fromPromise';
export interface Props {
    prefix?: string;
}
export interface State {
    version: string;
}
declare class Version extends React.Component<Props, State> {
    constructor();
    componentDidMount(): void;
    getVersion(): void;
    render(): JSX.Element;
}
export default Version;
