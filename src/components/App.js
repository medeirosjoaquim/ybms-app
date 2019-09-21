import React, {Component} from 'react';
import { Provider } from "react-redux";

import Header from './Header';
import Main from './main/';
import Footer from './Footer';
import store from '../store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <Provider store={store}>
        <Header />
        <div className="App-content">
          <Main/>
        </div>
        <Footer/>
     </Provider>
      </div>
    )
  }
}
