import { Switch, Route } from 'react-router';

import React, { lazy, Suspense } from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

import history from '../../history';
import LoadingState from '../helpers/Loading';
import WithFrame from '../WithFrame';

const retry: any = (
  fn: Function,
  retriesLeft: any = 5,
  interval: any = 1000
) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(async (error: Error) => {
        await new Promise(resolve => setTimeout(resolve, interval));
        if (retriesLeft === 1) {
          return window.location.reload(true);
        }
        retry(fn, retriesLeft - 1, interval).then(resolve, reject);
      }, interval);
  });
};
// const Reports = lazy(() => retry(() => import('./routes/')));
const Home = lazy(() => retry(() => import('../../pages/home/')));

type RouterProps = {};

const Router: React.FC<RouterProps> = () => {
  return (
    <ConnectedRouter history={history}>
        <Suspense fallback={<LoadingState />}>
            <Switch>
              <WithFrame exact path="/" component={Home} />
              
              <Route exact path="/" render={() => Home} />
            </Switch>
          </Suspense>
    </ConnectedRouter>
  );
};

const mapStateToProps = (state: any) => ({
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps)(Router);
