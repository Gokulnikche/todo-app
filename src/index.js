// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
// import './styles/custom.css';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';  // Import your custom styles here


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
