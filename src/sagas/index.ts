import { fork } from 'redux-saga/effects';
// import NoticeSaga from './NoticeSaga';
import ErrorSaga from './ErrorSaga';
// import AuthSaga from './AuthSaga';
// import SetupSaga from './SetupSaga';
// import SearchSaga from './SearchSaga';
import RoutingSaga from './RoutingSaga';
// import RegenerateProof from './RegenerateProof';

export default function* root() {
  // yield fork(SetupSaga);
  // yield fork(NoticeSaga);
  // yield fork(SearchSaga);
  yield fork(ErrorSaga);
  // yield fork(AuthSaga);
  yield fork(RoutingSaga);
  // yield fork(RegenerateProof);
}
