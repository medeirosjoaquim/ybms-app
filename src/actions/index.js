/** action types:
 * get artist info
 */

export const REQUEST_ARTISTINFO = "REQUEST_ARTISTINFO";
export const RECEIVE_ARTISTINFO = "RECEIVE_ARTISTINFO";

/** action types:
 * get discography and album info
 */
export const REQUEST_DISCOGRAPHY = "REQUEST_DISCOGRAPHY";
export const RECEIVE_DISCOGRAPHY = "RECEIVE_DISCOGRAPHY";

/** action types:
 * get tracklist
 */

export const REQUEST_TRACKLIST = "REQUEST_TRACKLIST";
export const RECEIVE_TRACKLIST = "RECEIVE_TRACKLIST";

/** actions:
 * request and receive artist info
 */
export const requestArtistInfo = () => ({ type: REQUEST_ARTISTINFO });
export const receiveArtistInfo =  data => ({ type: RECEIVE_ARTISTINFO, data });

/** actions:
 * request and receive discography and album info
 */

export const requestDiscography = () => ({ type: REQUEST_DISCOGRAPHY });
export const receiveDiscography = data => ({ type: RECEIVE_DISCOGRAPHY, data });

/** actions:
 * request and receive tracklist
 */

export const requestTracklist = () => ({ type: REQUEST_TRACKLIST });
export const receiveTracklist = data => ({ type: RECEIVE_TRACKLIST, data });