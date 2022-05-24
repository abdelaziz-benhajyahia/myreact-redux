import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
//import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import {Provider} from 'react-redux'
import store from './JS/store/store'

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
