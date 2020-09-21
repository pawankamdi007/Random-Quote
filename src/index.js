import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import Random from './Random';

ReactDOM.render(
  <React.StrictMode>
   <Random />
  </React.StrictMode>,
  document.getElementById('root')
);

