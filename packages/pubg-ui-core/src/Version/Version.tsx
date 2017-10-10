import * as React from 'react';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';

export interface Props { };

export interface State {
  version: string;
}

class VersionComponent extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = { version: 'x.x.x' };
  }

  componentDidMount() {
    Observable
      .fromPromise(window.engine.call<string>('GetGameVersion'))
      .subscribe(version => this.setState({ version }));
  }

  render() {
    return <div>{this.state.version}</div>
  }
}

export default VersionComponent;
