import { call, all,  put, takeEvery } from "redux-saga/effects";
import {DO_TEST_REQUEST, receiveTestData} from "../actions";
import axios from 'axios';

const testRequest = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users",  { 'headers': { 'Authorization': 'Teste' } });
    return response.data
  } catch (e) {
    console.log(e);
  }
};

/*
const testRequest = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
    },
    }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
 */

function* getTestData(action) {
    // do api call
  const teste = yield call(testRequest);
  console.log('call', teste);
    yield put ( receiveTestData (teste) )
}

export default function* rootSaga() {
  yield all([
    takeEvery(DO_TEST_REQUEST, getTestData),
    //takeEvery(REQUEST_DISCOGRAPHY, getDiscography),
    //takeEvery(REQUEST_TRACKLIST, getTrackList)
  ]);
}