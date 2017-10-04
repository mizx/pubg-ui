import { connect } from 'react-redux';

import VersionComponent from './component';
import { RootState } from 'modules';

const mapStateToProps = (state: RootState) => ({
  version: state.game.version
});

export default connect(mapStateToProps)(VersionComponent);
