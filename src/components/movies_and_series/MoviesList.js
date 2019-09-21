import React from 'react'
import {useSelector} from 'react-redux'
import {baseurl} from '../../config/base-url'
import './styles.scss'
const getMovies =  () => {
  let {movies} = useSelector(state => state);
  return movies.results;
}
const {poster} = baseurl;

const renderMovies = (movie, i) =>
  (<div key={i} id="movie">
    <div className="movie--card">
    <img src={poster + movie.poster_path} alt={`Poster for the movie ${movie.title}`}></img>
    </div>
    <div>{movie.vote_average}</div>
  </div>);

const MoviesList = () => {

  return (
       <div className="movie--list">
        {getMovies().map(renderMovies)}
      </div>
  )
}

export default MoviesList
