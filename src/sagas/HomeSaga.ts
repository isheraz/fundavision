import { all, put, takeLatest } from 'redux-saga/effects';
import LandingAction, { LandingTypes } from '../redux/home';
import { PSS } from '../library/types';

const r = (characters: number) =>
  Math.random()
    .toString(36)
    .substring(characters);

const rpss = {
  title: r(4),
  description: r(20),
  image: 'https://picsum.photos/200/300',
  startingPrice: 200,
  endingPrice: 120
};

const pssObject: Array<PSS> = Array.from({ length: 20 }, () => rpss);
function* hydrate() {
  yield put(LandingAction.hydrateContent(pssObject));
}

export default function* root() {
  yield all([takeLatest(LandingTypes.INIT, hydrate)]);
}
