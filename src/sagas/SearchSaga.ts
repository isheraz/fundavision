import { all, takeLatest, put } from 'redux-saga/effects';
import SearchActions, { SearchTypes } from '../redux/search';

const dummyData = [{ XBZ: ['xbz1', 'xbz2', 'xbz3'] }];

function* search({ keyword }: { keyword: string }) {
  console.log(keyword);

  yield put(SearchActions.results(dummyData[0].XBZ));
}

export default function* root() {
  yield all([takeLatest(SearchTypes.SEARCH, search)]);
}
