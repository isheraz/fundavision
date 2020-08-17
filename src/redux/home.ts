import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  hydrateContent: ['landing']
});

export const LandingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
type LandingState = {
  hydrateContent: string;
};

const INITIAL_STATE: LandingState = {
  hydrateContent: 'empty'
};

/* ------------- Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.HYDRATE_CONTENT]: (state, { hydrateContent }) => ({
    ...state,
    hydrateContent
  })
});
