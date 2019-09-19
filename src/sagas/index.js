import { call, all,  put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_ARTISTINFO, receiveArtistInfo, REQUEST_DISCOGRAPHY, receiveDiscography,
REQUEST_TRACKLIST, receiveTracklist} from "../actions";
import {fetchArtistInfo, fetchDiscography, fetchSongsByAlbum} from './api'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* getArtistInfo(action) {
  try {
    // do api call
    const data = yield call(fetchArtistInfo);
    yield put(receiveArtistInfo(data));
  } catch (e) {
    console.log(e);
  }
}
function* getDiscography(action) {
  try {
    // do api call
    const data = yield call(fetchDiscography);
    yield put(receiveDiscography(data));
  } catch (e) {
    console.log(e);
  }
}

function* getTrackList(action) {
  try {
    // do api call
    const data = yield call(fetchSongsByAlbum);
    yield put(receiveTracklist(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield all([
    takeEvery(REQUEST_ARTISTINFO, getArtistInfo),
    takeEvery(REQUEST_DISCOGRAPHY, getDiscography),
    takeEvery(REQUEST_TRACKLIST, getTrackList)
  ]);
}