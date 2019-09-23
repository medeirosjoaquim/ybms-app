import React from 'react';
import humanizeDuration from 'humanize-duration';
import {baseurl} from '../../../config/base-url'
import {apiKey} from '../../../sagas/api';

const durationTomili = (minutes) => {
  let seconds = minutes * 60;
  let miliseconds = seconds * 1000;
  return (miliseconds)
}
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

export const fetchData = (media) => {
  fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apiKey}&append_to_response=credits,reviews`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
}