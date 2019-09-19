import { call, all,  put, takeEvery } from "redux-saga/effects";
import {DO_TEST_REQUEST, receiveTestData} from "../actions";


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


function* getTestData(action) {
    // do api call
  const data = yield call(testRequest);
  console.log('call', data);
    yield put ( receiveTestData (data) )
}

export default function* rootSaga() {
  yield all([
    takeEvery(DO_TEST_REQUEST, getTestData),
    //takeEvery(REQUEST_DISCOGRAPHY, getDiscography),
    //takeEvery(REQUEST_TRACKLIST, getTrackList)
  ]);
}