import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store/createStore';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const initialState = (window as any).__INITIAL_STATE__;
const store = createStore(initialState);

if (process.env.NODE_ENV === 'development') {
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
