import React from 'react'
import Banner from './banner'
import {useSelector} from 'react-redux'
import {baseurl} from '../config/base-url'



const Home = () => {

  let poster_path = '';
  let poster_description = '';
  let release_date = '';
  const {movies} = useSelector(state => state);
  if (movies !== undefined & movies.results !== undefined) {
    poster_path = baseurl.banner + movies.results[0].poster_path;
    poster_description = movies.results[0].title;
    release_date = movies.results[0].release_date.slice(0,4);
  }
  return (
    (movies !== undefined & movies.results !== undefined) ?
    <div>
      <Banner title={`${poster_description} - ${release_date}` } imgSrc={poster_path} imgAlt={`Banner for the movie ${poster_description}`} />
      </div> :
      <div><h2>Loading...</h2></div>
  )
}

export default Home

