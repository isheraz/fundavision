import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  init: null,
  search: ['keyword'],
  results: ['results']
});

export const SearchTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
type SearchStates = {
  keyword: string;
  results: any;
};

const INITIAL_STATE: SearchStates = {
  keyword: '',
  results: []
};

export const searchSelector: (state: any) => SearchStates = (state: any) =>
  state.search;

/* ------------- Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT]: state => ({
    ...state
  }),
  [Types.SEARCH]: (state, { keyword }) => ({
    ...state,
    keyword
  }),
  [Types.RESULTS]: (state, { results }) => ({
    ...state,
    results
  })
});
