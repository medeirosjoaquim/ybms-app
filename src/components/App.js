import React from 'react';
import { Provider } from "react-redux";

import Header from './Header';
import Main from './main/';
import Footer from './Footer';
import store from '../store';

import '../styles/App.scss';

export default () =>
      <Provider store={store}>
        <Header />
        <div className="App-content">
          <Main/>
        </div>
        <Footer/>
     </Provider>
