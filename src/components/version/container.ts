import { connect } from 'react-redux';

import VersionComponent from './component';
import { RootState } from 'modules';

const mapStateToProps = (state: RootState) => ({
  version: state.app.version
});

export default connect(mapStateToProps)(VersionComponent);
