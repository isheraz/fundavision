import { combineReducers } from 'redux';

export const makeRootReducer = (history: any) => {
  return combineReducers({
    // notices: require('../redux/notices').reducer,
    // search: require('../redux/search').reducer,
    errors: require('../redux/errors').reducer,
    // auth: require('../redux/auth').reducer,
    router: require('../redux/router').reducer(history)
  });
};

export const injectReducer = (store: any, { key, reducer }: any) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  // eslint-disable-next-line no-param-reassign
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
