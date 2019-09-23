import { call, all,  put, takeEvery, fork } from "redux-saga/effects";
import { REQUEST_MOVIES_AND_SERIES_LIST, REQUEST_MOVIE_DETAILS} from "../actions/types";
import { receiveMoviesList, receiveSeriesList, receiveMovieDetails} from "../actions";
import * as middleware from './api'

export function* getMovies() {
  const movies = yield call(middleware.getMoviesList);
  yield put( receiveMoviesList(movies));
}
export function* getMovieDetails(action) {
  const movies = yield call(middleware.getMovieDetails, action.id);
  console.log(movies);
    yield put(receiveMovieDetails(movies));
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
    takeEvery(REQUEST_MOVIES_AND_SERIES_LIST, getMoviesAndSeries),  takeEvery(REQUEST_MOVIE_DETAILS, getMovieDetails)
  ]);
}