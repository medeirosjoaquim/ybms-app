import { call, all,  put, takeEvery, fork } from "redux-saga/effects";
import { REQUEST_MOVIES_AND_SERIES_LIST, DO_TEST_REQUEST} from "../actions/types";
import {receiveTestData, receiveMoviesList, receiveSeriesList} from "../actions";
import * as middleware from './api'

export function* getMovies() {
  const movies = yield call(middleware.getMoviesList);
  //console.log(`${movies.data.description}:`, movies.data)
  yield put( receiveMoviesList(movies));
}

export function* getSeries() {
  const series = yield call(middleware.getSeriesList)
  console.log(`${series.data.description}:`, series.data)
  yield put( receiveSeriesList(series));
}

export function* getMoviesAndSeries() {
  yield all([fork(getMovies), fork(getSeries)]);
}

function* getTestData(action) {
    // do api call
    const teste = yield call(middleware.testRequest);
    yield put ( receiveTestData (teste) )
}

export default function* rootSaga() {
  yield all([
    takeEvery(DO_TEST_REQUEST, getTestData),
    takeEvery(REQUEST_MOVIES_AND_SERIES_LIST, getMoviesAndSeries),

  ]);
}