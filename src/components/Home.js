import React from 'react'
import Banner from './banner'
import {useSelector} from 'react-redux'
import {baseurl} from '../config/base-url'



const Home = () => {

  let movie_poster_path = '';
  let movie_poster_description = '';
  let movie_release_date = '';
  let serie_poster_path = '';
  let serie_poster_description = '';
  let serie_release_date = '';
  const {movies} = useSelector(state => state);
  const {series} = useSelector(state => state);

  if (movies !== undefined & movies.results !== undefined) {
    movie_poster_path = baseurl.banner + movies.results[0].poster_path;
    movie_poster_description = movies.results[0].title;
    movie_release_date = movies.results[0].release_date.slice(0,4);
  }

  if (series !== undefined & series.results !== undefined) {
    serie_poster_path = baseurl.banner + series.results[0].poster_path;
    serie_poster_description = series.results[0].name;
    serie_release_date = series.results[0].first_air_date.slice(0,4);
  }
  return (
    (movies !== undefined & movies.results !== undefined & series !== undefined & series.results !== undefined) ?
    <div className="home">
        <div className="home-banner--container">
          <div className="home-banner--title Title-1">
            TOP #1 Movie
          </div>
          <Banner title={`${movie_poster_description} - ${movie_release_date}`} imgSrc={movie_poster_path} imgAlt={`Banner for the movie ${movie_poster_description}`} />
        </div>
        <div className="home-banner--container">
          <div className="home-banner--title Title-1">
            TOP #1 Serie
          </div>
          <Banner title={`${serie_poster_description} - ${serie_release_date}`} imgSrc={serie_poster_path} imgAlt={`Banner for the serie ${serie_poster_description}`} />
        </div>
    </div>
      :
      <div>
        <h2 className="display-4 text-primary font-weight-bold
      ">Loading...</h2>
      </div>
  )
}

export default Home

