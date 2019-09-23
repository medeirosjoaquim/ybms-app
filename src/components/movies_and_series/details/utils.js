import React from 'react';
import humanizeDuration from 'humanize-duration';

const durationTomili = (minutes) => {
  let seconds = minutes * 60;
  let miliseconds = seconds * 1000;
  return (miliseconds)
}
console.log(humanizeDuration((127 * 60) * 1000));

export const castMap = (cast, i) => (
<div id="album-container" key={i} >
    <div>{cast.name}</div>
    <div>{cast.character}</div>
    <div><img src={cast.profile_path}/></div>
  </div>
)

export const runTime = (duration) => {
  return humanizeDuration(durationTomili(duration));
}
