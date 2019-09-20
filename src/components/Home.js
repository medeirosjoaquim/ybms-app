import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
  const basePosterUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  let poster_path = ''
  const movies = useSelector(state => state.movies);
  if (movies !== undefined & movies.results !== undefined) {
    poster_path = basePosterUrl + movies.results[0].poster_path;
  }
  return (
    <div>
      <img src={!poster_path === '' || poster_path} alt="" />
    </div>
  )
}

export default Home

