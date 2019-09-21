import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";

import {createStore, applyMiddleware, compose } from 'redux';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, {isLogged: false},/* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));

/* export default createStore(reducer, applyMiddleware(sagaMiddleware));
 */
// then run the saga
sagaMiddleware.run(rootSaga);