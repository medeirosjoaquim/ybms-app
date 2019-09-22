import React from 'react'
import Banner from './banner'
import {useSelector} from 'react-redux'
import {baseurl} from '../config/base-url'
import MoviesAndSeries from './movies_and_series'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export const Home = () => {
  const classes = useStyles();
  let movie_poster_path = '';
  let movie_poster_description = '';
  let movie_release_date = '';
  let serie_poster_path = '';
  let serie_poster_description = '';
  let serie_release_date = '';
  const {movies} = useSelector(state => state);
  const {series} = useSelector(state => state);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
         <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
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
        <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
         aaa
        </div>
      </Modal>
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

