import { fork } from 'redux-saga/effects';
import ErrorSaga from './ErrorSaga';
import RoutingSaga from './RoutingSaga';
import SearchSaga from './SearchSaga';
import HomeSaga from './HomeSaga';

export default function* root() {
  yield fork(ErrorSaga);
  yield fork(RoutingSaga);
  yield fork(SearchSaga);
  yield fork(HomeSaga);
}
