import React from 'react';
import './App.css';
import Router from './components/Router/';
import { Provider } from 'react-redux';

type AppProps = {
  store: any;
};

const App = ({store}: AppProps) => {
  return (
    <div className="fundavision-app">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
