import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {

  const movies = useSelector(state => state.movies)
  console.log(movies.results !== undefined ? movies.results.length : 'no results');
  return (
    <div>
    home component works! {movies.description}
    </div>
  )
}

export default Home

