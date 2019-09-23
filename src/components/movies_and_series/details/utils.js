import React from 'react';
import humanizeDuration from 'humanize-duration';
import {baseurl} from '../../../config/base-url'
import { FaStar } from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';

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

export const renderMovies = (movie, i) =>
  (<div key={i} id="movie" onClick={() => console.log(movie.id)}>
    <div className="movieseries--card">
      <img src={`${baseurl.poster}${movie.poster_path}`} alt={`Poster for the movie ${movie.title}`}></img>
      <div className="movieseries--info">
      <span className="movieseries-average"><FaHeart/></span>
        <span className="movieseries-average"><FaStar />
          <span className="movieseries-rating">{movie.vote_average}</span>
        </span>
      </div>
    </div>
  </div>);


export const runTime = (duration) => {
  return humanizeDuration(durationTomili(duration));
}
