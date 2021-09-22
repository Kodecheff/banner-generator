import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import AuthHistory from './auth/auth-history'



ReactDOM.render(
  <Router>
    <AuthHistory>
      <App />
    </AuthHistory>
  </Router>,

  document.getElementById("root")
);
