import React from 'react';
import humanizeDuration from 'humanize-duration';
import {baseurl} from '../../../config/base-url'
const durationTomili = (minutes) => {
  let seconds = minutes * 60;
  let miliseconds = seconds * 1000;
  return (miliseconds)
}
console.log(humanizeDuration((127 * 60) * 1000));

export const castMap = (cast, i) => (
<div id="cast-container" key={i} >
    < div className="cast--container">
        <div><img src={`${baseurl.face}${cast.profile_path}`} alt={cast.name} /></div>
        <div className="cast--roles">
        <div>
          <strong>{cast.name}</strong>
        </div>
        <div>
          {cast.character}
        </div>
        </div>
    </div>
  </div>
)

export const runTime = (duration) => {
  return humanizeDuration(durationTomili(duration));
}
