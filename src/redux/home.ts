import { createReducer, createActions } from 'reduxsauce';
import { PSS } from '../library/types';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  init: [],
  hydrateContent: ['pssObject']
});

export const LandingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
type LandingState = {
  pssObject: Array<PSS>;
};

const INITIAL_STATE: LandingState = {
  pssObject: []
};

/* ------------- Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT]: state => ({
    ...state
  }),
  [Types.HYDRATE_CONTENT]: (state, { pssObject }) => ({
    ...state,
    pssObject
  })
});
