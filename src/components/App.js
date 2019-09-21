import React, {Component, Fragment} from 'react';
import { Provider } from "react-redux";

import Header from './Header';
import Main from './main/';
import Footer from './Footer';
import store from '../store';

export default class App extends Component {

  render() {
    return (

      <Provider store={store}>
          <Fragment>
          <Header />
          <div className="App-content">
            <Main/>
          </div>
            <Footer />
        </Fragment>
        </Provider>
    )
  }
}
