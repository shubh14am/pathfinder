import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './Grid';  //grid init file

import AppControl from './AppController';

import './scss/index.scss';
 
ReactDOM.render(<App />,document.getElementById('root'));

AppControl.init();  // app starts

