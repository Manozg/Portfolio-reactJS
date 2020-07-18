import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);


