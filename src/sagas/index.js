import { call, all,  put, takeEvery } from "redux-saga/effects";
import { DO_TEST_REQUEST, GENERATE_REQUEST_TOKEN } from "../actions/types";
import {receiveTestData} from "../actions";
import axios from 'axios';

const testRequest = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users", {'headers': {'Authorization': 'Teste'}});
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
// theMovieDbAuth
// Generate a new request token
const generateRequestToken = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/4/list/121792?page=1', {
      'headers': {
        'authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjhmNjAzNmUzMWU2YTJhYTVhZjIwYzI2MTE0MTM4MSIsInN1YiI6IjVkODI4MjQwZjY3ODdhMDAxNTllNDg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kk8r1u6ykCvdKrMHOfwaO7LYnyqxC2axf1S_oGI9wIY',
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    console.log('generate request token', response)
    return response
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
    takeEvery(GENERATE_REQUEST_TOKEN, generateRequestToken),
    //takeEvery(REQUEST_DISCOGRAPHY, getDiscography),
    //takeEvery(REQUEST_TRACKLIST, getTrackList)
  ]);
}