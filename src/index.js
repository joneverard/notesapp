import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import 'draft-js/dist/Draft.css';
// import '../style/style.css';
// import london from 'assets/london.jpeg'
import reducers from './reducers/index.js';
// var url = require('file-loader?name=london.jpeg!./assets/london.jpeg');


import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));



