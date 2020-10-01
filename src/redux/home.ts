import { createReducer, createActions } from 'reduxsauce';
import { PSS } from '../library/types';
import { User } from '../library/types/User';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  init: [],
  initPssUsers: [],
  hydrateContent: ['pssObject'],
  hydrateContentWithUsers: ['pssObject', 'users']
});

export const LandingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
type LandingState = {
  pssObject: Array<PSS>;
  users: Array<User>;
};

const INITIAL_STATE: LandingState = {
  pssObject: [],
  users: []
};

/* ------------- Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT]: state => ({
    ...state
  }),
  [Types.INIT_PSS_USERS]: state => ({
    ...state
  }),
  [Types.HYDRATE_CONTENT]: (state, { pssObject }) => ({
    ...state,
    pssObject
  }),
  [Types.HYDRATE_CONTENT_WITH_USERS]: (state, { pssObject, users }) => ({
    ...state,
    pssObject,
    users
  })
});
