/** action types test:
 *
 */

export const DO_TEST_REQUEST = "DO_TEST_REQUEST";
export const DO_RECEIVE_TEST = "DO_RECEIVE_TEST";

/** action types for session:
 *
 */


/** action types for movies:
 *
 */


export const REQUEST_MOVIES_LIST = "REQUEST_MOVIES_LIST";
export const RECEIVE_MOVIES_LIST = "RECEIVE_MOVIES_LIST";

export const REQUEST_MOVIE_INFO = "REQUEST_MOVIE_INFO";
export const RECEIVE_MOVIE_INFO = "RECEIVE_MOVIE_INFO";

/** action types series:
 *
 */

export const REQUEST_SERIES_LIST = "REQUEST_SERIES_LIST";
export const RECEIVE_SERIES_LIST = "RECEIVE_SERIES_LIST";

export const REQUEST_SERIE_INFO = "REQUEST_SERIE_INFO";
export const RECEIVE_SERIE_INFO = "RECEIVE_SERIE_INFO";

/** action types:
 * get tracklist
 */

export const REQUEST_TRACKLIST = "REQUEST_TRACKLIST";
export const RECEIVE_TRACKLIST = "RECEIVE_TRACKLIST";

/* test request */
export const requestTestData = () => ({type: DO_TEST_REQUEST});
export const receiveTestData = data => ({ type: DO_RECEIVE_TEST, data });
/* export const requestArtistInfo = () => ({ type: REQUEST_ARTISTINFO });
export const receiveArtistInfo =  data => ({ type: RECEIVE_ARTISTINFO, data });


export const requestDiscography = () => ({ type: REQUEST_DISCOGRAPHY });
export const receiveDiscography = data => ({ type: RECEIVE_DISCOGRAPHY, data });

export const requestTracklist = () => ({ type: REQUEST_TRACKLIST });
export const receiveTracklist = data => ({ type: RECEIVE_TRACKLIST, data }); */