import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import preval from 'preval.macro';
import Router from './components/Router';

type AppProps = {
  store: any;
};
const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`;

const App = ({ store }: AppProps) => {
  useEffect(() => {
    console.log(`Using build from: ${dateTimeStamp}`);
  }, []);
  return (
    <div className="fundavision-app">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
