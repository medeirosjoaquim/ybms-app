import React from 'react'
import Banner from './banner'
import {useSelector} from 'react-redux'
import {baseurl} from '../config/base-url'

const Home = () => {


  let poster_path = ''
  const movies = useSelector(state => state.movies);
  if (movies !== undefined & movies.results !== undefined) {
    poster_path = baseurl.banner + movies.results[0].poster_path;
  }
  return (
    <div>
      <img src={!poster_path === '' || poster_path} alt="" />
      <Banner title="title_works" imgSrc="imgSrc works"/>
    </div>
  )
}

export default Home

