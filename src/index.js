import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

if (localStorage.getItem('@app/favorites/movies') === null) {
   localStorage.setItem('@app/favorites/movies', 'works');
   console.log('works');
}

if (localStorage.getItem('@app/favorites/series') === null) {
   localStorage.setItem('@app/favorites/series', 'works');
   console.log('works');
}

ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
   , document.getElementById('root')
);

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
