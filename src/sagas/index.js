import { call, all,  put, takeEvery } from "redux-saga/effects";
import { REQUEST_MOVIES_AND_SERIES_LIST, DO_TEST_REQUEST} from "../actions/types";
import * as actions from "../actions";

import * as middleware from './api'

export function* getMoviesAndSeries() {
  const movies = yield call(middleware.getMoviesList)
  const series = yield call(middleware.getSeriesList)
  yield put(actions.receiveMovies(movies));
  yield put(actions.receiveSeries(series));
}

function* getTestData(action) {
    // do api call
  const teste = yield call(middleware.testRequest);
  console.log('call', teste);
    yield put ( receiveTestData (teste) )
}

function* receiveMoviesList(action) {
// do api call
const teste = yield call(middleware.testRequest);
console.log('call', teste);
  yield put ( receiveTestData (teste) )
}


export default function* rootSaga() {
  yield all([
    takeEvery(DO_TEST_REQUEST, getTestData),
    takeEvery(REQUEST_MOVIES_AND_SERIES_LIST, getMoviesAndSeries),

  ]);
}