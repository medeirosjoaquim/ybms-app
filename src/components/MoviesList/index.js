import React from 'react';
import {useSelector} from 'react-redux'

const renderMovies = (movie, i) =>
  (<div key={i} id="movie">
    <div>{movie.poster_path}</div>
    <div>{movie.popularity}</div>
    <div>{movie.vote_count}</div>
    <div>{movie.video}</div>
    <div>{movie.media_type}</div>
    <div>{movie.id}</div>
    <div>{movie.adult}</div>
    <div>{movie.backdrop_path}</div>
    <div>{movie.original_language}</div>
    <div>{movie.original_title}</div>
    <div>{movie.genre_ids}</div>
    <div>{movie.title}</div>
    <div>{movie.vote_average}</div>
    <div>{movie.overview}</div>
    <div>{movie.overview}</div>
    <div>{movie.release_date}</div>
  </div>);

const MoviesList = () => {
  const {movies} = useSelector(state => state);
  const {series} = useSelector(state => state);
  console.log(movies);
  console.log(series);

  return (
    <div>
      favorites worksss; {
          movies !== undefined && movies.results !== undefined ?
          movies.results.map(renderMovies) : ''}
    </div>
  );
}

export default MoviesList;
