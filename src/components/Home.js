import React from 'react'
import Banner from './banner'
import {useSelector} from 'react-redux'
import {baseurl} from '../config/base-url'

const Home = () => {


  let poster_path = ''
  let poster_description = ''
  const {movies} = useSelector(state => state);
  if (movies !== undefined & movies.results !== undefined) {
    poster_path = baseurl.banner + movies.results[0].poster_path;
    poster_description = movies.results[0].title;
  }
  return (
    (movies !== undefined & movies.results !== undefined) ?
    <div>
      <Banner title={!poster_description === '' || poster_description} imgSrc={!poster_path === '' || poster_path} imgAlt={`Banner for the movie ${!poster_description === '' || poster_description}`} />
      </div> :
      <div><h3>Loading...</h3></div>
  )
}

export default Home

