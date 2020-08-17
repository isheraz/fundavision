import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Home from './home';


const mapStateToProps = (state: any) => ({
  // orgContext: state.auth.orgContext,
  // authError: state.auth.error,
  // userAuth: state.auth.userAuth
});
const mapDispatchToProps = (dispatch: any) => ({
  // authActions: bindActionCreators(AuthActions, dispatch),
  push: (path: any) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
