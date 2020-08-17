// external
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// internal
import makeRootReducer from './reducers';
import IndexSaga from '../sagas';
import history from '../history';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routerMiddleware(history), thunk, sagaMiddleware];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers: any = [];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = (window as any)
      .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store: any = createStore(
    makeRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  store.asyncReducers = {};

  // run our index saga
  sagaMiddleware.run(IndexSaga);

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
      sagaMiddleware.run(IndexSaga);
    });
  }

  return store;
};
