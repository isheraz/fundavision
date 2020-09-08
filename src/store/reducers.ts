import { combineReducers } from 'redux';

export const makeRootReducer = (history: any) => {
  return combineReducers({
    router: require('../redux/router').reducer(history),
    errors: require('../redux/errors').reducer,
    pss: require('../redux/home').reducer,
    search: require('../redux/search').reducer
  });
};

export const injectReducer = (store: any, { key, reducer }: any) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  // eslint-disable-next-line no-param-reassign
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
