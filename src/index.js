import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from './store/createStore';
import { Provider } from 'react-redux';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);


