import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Header from '../Header';

const mockStore = configureMockStore();
const store = mockStore({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Header />
      </Provider>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
