import * as ACTION from './types'

/* test request */
export const requestTestData = () => ({type: ACTION.DO_TEST_REQUEST});

export const receiveTestData = data => ({type: ACTION.DO_RECEIVE_TEST, data});

/* movies requests */

export const requestMoviesList = () => ({type: ACTION.REQUEST_MOVIES_LIST});

export const receiveMoviesList = data => ({type: ACTION.RECEIVE_MOVIES_LIST, data});

/* export const requestArtistInfo = () => ({ type: REQUEST_ARTISTINFO });
export const receiveArtistInfo =  data => ({ type: RECEIVE_ARTISTINFO, data });


export const requestDiscography = () => ({ type: REQUEST_DISCOGRAPHY });
export const receiveDiscography = data => ({ type: RECEIVE_DISCOGRAPHY, data });

export const requestTracklist = () => ({ type: REQUEST_TRACKLIST });
export const receiveTracklist = data => ({ type: RECEIVE_TRACKLIST, data }); */