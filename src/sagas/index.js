import { call, all,  put, takeEvery, fork } from "redux-saga/effects";
import { REQUEST_SESSION_TOKEN, REQUEST_MOVIES_AND_SERIES_LIST} from "../actions/types";
import { receiveSessionToken, receiveMoviesList, receiveSeriesList} from "../actions";
import * as middleware from './api'

/**
 * auth session
 */
export function* getRequestToken() {
  const sessionToken = yield call(middleware.requestSessionToken);
  console.log('response from session saga:', sessionToken);
  if (sessionToken.success) {
    console.log('session ok');
    yield put (receiveSessionToken(sessionToken))
  } else {
   return // put (receiveSessionToken(sessionToken))
  }


}

/**
 * movies and series list methods
 */
export function* getMovies() {
  const movies = yield call(middleware.getMoviesList);
  yield put( receiveMoviesList(movies));
}

export function* getSeries() {
  const series = yield call(middleware.getSeriesList)
  yield put( receiveSeriesList(series));
}

export function* getMoviesAndSeries() {
  yield all([fork(getMovies), fork(getSeries)]);
}

export default function* rootSaga() {
  yield all([
    takeEvery(REQUEST_SESSION_TOKEN, getRequestToken),
    takeEvery(REQUEST_MOVIES_AND_SERIES_LIST, getMoviesAndSeries),
  ]);
}