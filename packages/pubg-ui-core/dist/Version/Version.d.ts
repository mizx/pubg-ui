/// <reference types="react" />
import * as React from 'react';
import 'rxjs/add/observable/fromPromise';
export interface Props {
}
export interface State {
    version: string;
}
declare class VersionComponent extends React.Component<Props, State> {
    constructor();
    componentDidMount(): void;
    getVersion(): void;
    render(): JSX.Element;
}
export default VersionComponent;
