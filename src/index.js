import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
//import Counter from './Counter.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// public/index.html body 안의 root div안에 App을 넣는다

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
