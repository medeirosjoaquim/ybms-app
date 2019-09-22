import React from 'react'
import Banner from './banner'
import {useSelector} from 'react-redux'
import {baseurl} from '../config/base-url'
import MoviesAndSeries from './movies_and_series'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {useWindowSize} from '../utils';
import DetailsContent from './movies_and_series/details'
export const Home = () => {
  const useStyles = makeStyles({
    list: {
      width: useWindowSize().width < 500 ? 200 : 400, // set sidebar width according to viewport
    },
    fullList: {
      width: 'auto',
    },
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [side]: open});
  };


  let movie_poster_path = '';
  let movie_poster_description = '';
  let movie_release_date = '';
  let serie_poster_path = '';
  let serie_poster_description = '';
  let serie_release_date = '';
  const {movies} = useSelector(state => state);
  const {series} = useSelector(state => state);

  const sideList = (side, mediaType, title) => {
    let details = {};
    if (mediaType === "movie") {
      details = movies.results.find(data => data.name === title)
    } else if (mediaType === "tv") {
      details = movies.results.find(data => data.original_name === title)
    }
    return <div
    className={classes.list}
    role="presentation"
    onClick={toggleDrawer(side, false)}
    onKeyDown={toggleDrawer(side, false)}
    >
    mediaType === 'movie' ?
    <DetailsContent teste={details.name} />
      :
    <DetailsContent teste={details.original_name} />
  </div>
};
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
        <button onClick={toggleDrawer('right', true)}>Open Right</button>
        <div className="home-banner--container">
          <div className="home-banner--wrapper">
            <div className="home-banner--title Title-1">
              TOP #1 Movie
            </div>
            <Banner title={`${movie_poster_description} - ${movie_release_date}`} imgSrc={movie_poster_path} imgAlt={`Banner for the movie ${movie_poster_description}`} />
          </div>
          <div className="home-banner--wrapper">
            <div className="home-banner--title Title-1">
              TOP #1 Serie
            </div>
            <Banner title={`${serie_poster_description} - ${serie_release_date}`} imgSrc={serie_poster_path} imgAlt={`Banner for the serie ${serie_poster_description}`} />
            </div>
        </div>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
        <MoviesAndSeries/>
    </div>
      :
      <div>
        <h2 className="display-4 text-primary font-weight-bold
      ">Loading...</h2>
      </div>
  )
}

export default Home

