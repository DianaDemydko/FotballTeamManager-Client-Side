import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import store  from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <BrowserRouter>
          <App />
          <Routes />
      </BrowserRouter>
    </ToastProvider>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
