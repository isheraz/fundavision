import { takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';

export function* getRedirect() {}

function* redirect() {}

export default function* root() {
  yield takeLatest(LOCATION_CHANGE, redirect);
}
