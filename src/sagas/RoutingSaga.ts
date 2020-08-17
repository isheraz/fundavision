import { call, take, select, put, takeLatest } from 'redux-saga/effects';

import { push, LOCATION_CHANGE } from 'connected-react-router';

function* getLandingPage() {
}

export function* getRedirect() {
  
}

function* checkNeedToRedirect() {
}

function* redirect() {

}

export default function* root() {
  yield takeLatest(LOCATION_CHANGE, redirect);
}
