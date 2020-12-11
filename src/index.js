import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';


ReactDOM.render(
  <ToastProvider>
    <BrowserRouter>
        <App />
        <Routes />
    </BrowserRouter>
    </ToastProvider>,
  document.getElementById('root')
);
reportWebVitals();
