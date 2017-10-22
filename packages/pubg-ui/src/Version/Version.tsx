import React from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

export interface Props {
  prefix?: string;
};

export interface State {
  version: string;
}

class Version extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = { version: '' };
  }

  componentDidMount() {
    // hack to get around promise never firing with coherent
    setTimeout(() => this.getVersion(), 32);
  }

  getVersion() {
    Observable
      .fromPromise(window.engine.call<string>('GetGameVersion'))
      .subscribe(version => this.setState({ version }));
  }

  render() {
    const { prefix = '' } = this.props;

    return <div>{`${prefix}${this.state.version}`}</div>;
  }
}

export default Version;
