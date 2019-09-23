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
      width: useWindowSize().width < 500 ? 240 : 500, // set sidebar width according to viewport
    },
    fullList: {
      width: 'auto',
    },
  });
  const classes = useStyles();

  let movie_poster_path = '';
  let movie_poster_description = '';
  let movie_release_date = '';
  let serie_poster_path = '';
  let serie_poster_description = '';
  let series_release_date = '';

  const {movies} = useSelector(state => state);
  const {series} = useSelector(state => state);
    const [state, setState] = React.useState({
      right: false,
      isLoaded: true
    });

  const toggleDrawer = (side, open, mediaValue) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ [side]: open, media: mediaValue});
  };


  if (movies !== undefined & movies.results !== undefined) {
    movie_poster_path = baseurl.banner + movies.results[0].poster_path;
    movie_poster_description = movies.results[0].title;
    movie_release_date = movies.results[0].release_date.slice(0,4);
  }

  if (series !== undefined & series.results !== undefined) {
    serie_poster_path = baseurl.banner + series.results[0].poster_path;
    serie_poster_description = series.results[0].name;
    series_release_date = series.results[0].first_air_date.slice(0,4);
  }

  const sideList = (side) => {
        return <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
        {state.media === 'movie' ?
            <DetailsContent title={movie_poster_description} imgSrc={baseurl.posterDetail + movies.results[0].poster_path} year={movie_release_date} id={movies.results[0].id} media='movies'/>
          :
        <DetailsContent title={serie_poster_description}  imgSrc={baseurl.posterDetail + series.results[0].poster_path} year={series_release_date} id={series.results[0].id} media='tv'/>
        }
      </div>
    };
  if (movies !== undefined && series !== undefined ) {
    return (
      ( movies.results !== undefined && series.results !== undefined) ?
        <div className="home">
          <div className="home-banner--container">
            <div className="home-banner--wrapper">
              <div className="home-banner--title Title-1">
                TOP #1 Movie
              </div>
              <div onClick={toggleDrawer('right', true, 'movie')}>
                <Banner imgSrc={movie_poster_path} imgAlt={`Banner for the movie ${movie_poster_description}`}  />
              </div>
            </div>
            <div className="home-banner--wrapper">
              <div className="home-banner--title Title-1">
                TOP #1 Serie
              </div>
              <div onClick={toggleDrawer('right', true, 'tv')}>
                <Banner imgSrc={serie_poster_path} imgAlt={`Banner for the serie ${serie_poster_description}`} />
              </div>
            </div>
          </div>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right', state.media)}
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

}

export default Home

