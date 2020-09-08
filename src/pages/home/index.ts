import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';

import LandingActions from '../../redux/home';
import Home from './home';

const mapStateToProps = (state: any) => ({
  pssObjects: state.pss.pssObject
});
const mapDispatchToProps = (dispatch: any) => ({
  landingActions: bindActionCreators(LandingActions, dispatch),
  push: (path: any) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
