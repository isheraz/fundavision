import { takeEvery, all } from 'redux-saga/effects';
import { ErrorTypes } from '../redux/errors';
import { TakeableChannel } from 'redux-saga';

function* handleError({ error }: { error: string }) {
  console.log(error)
  yield true;
}

export default function* root() {
  return yield all([takeEvery(ErrorTypes.SET_ERROR as unknown as TakeableChannel<any>, handleError)]);
}
