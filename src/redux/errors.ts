import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setError: ['error']
});

export const ErrorTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
type ErrorState = {
  error?: string;
};

const INITIAL_STATE: ErrorState = {
  error: ''
};

/* ------------- Reducer ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ERROR]: (state, { error }) => ({
    ...state,
    error
  })
});
