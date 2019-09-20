import * as ACTION from './types'

/* test request */
export const requestTestData = () => ({type: ACTION.DO_TEST_REQUEST});

export const receiveTestData = data => ({type: ACTION.DO_RECEIVE_TEST, data});

/*  request all*/
export const requestMoviesAndSeriesList = () => ({type: ACTION.REQUEST_MOVIES_AND_SERIES_LIST});

/* movies requests */
export const requestMoviesList = () => ({type: ACTION.REQUEST_MOVIES_LIST});

export const receiveMoviesList = payload => ({type: ACTION.RECEIVE_MOVIES_LIST, payload});

/* series requests */
export const requestSeriesList = () => ({type: ACTION.REQUEST_SERIES_LIST});

export const receiveSeriesList = payload => ({type: ACTION.RECEIVE_MOVIES_LIST, payload});