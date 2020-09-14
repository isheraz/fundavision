import { all, put, takeLatest } from 'redux-saga/effects';
import LandingAction, { LandingTypes } from '../redux/home';
import { PSS } from '../library/types';

const r = (characters: number) =>
  Math.random()
    .toString(36)
    .substring(characters);

const rpss = () => {
  return {
    title: r(4),
    description: `Curae diam ornare aenean nam inceptos placerat nec faucibus, convallis lectus erat accumsan nascetur parturient dignissim pharetra, lobortis odio sapien id porta rutrum fringilla. Facilisi tellus sagittis sociosqu facilisis nisl suscipit integer interdum luctus volutpat, aenean tristique erat urna litora magnis dis id quam nisi nulla, vitae nascetur aliquet sapien venenatis ac velit risus ultrices. Porta habitasse mi malesuada placerat et duis`,
    image: 'https://picsum.photos/200/300',
    startingPrice: 200,
    endingPrice: 120
  };
};

const pssObject: Array<PSS> = Array.from({ length: 20 }, rpss);
function* hydrate() {
  yield put(LandingAction.hydrateContent(pssObject));
}

export default function* root() {
  yield all([takeLatest(LandingTypes.INIT, hydrate)]);
}
