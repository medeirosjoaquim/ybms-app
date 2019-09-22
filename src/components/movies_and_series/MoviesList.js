import React, {Component} from 'react'
import {useSelector} from 'react-redux'
import {baseurl} from '../../config/base-url'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {dynamicSort} from '../../utils'

import './styles.scss'

const {poster} = baseurl;
let moviesArray = [];
const getMovies = () => {
  let {movies} = useSelector(state => state);
  moviesArray = movies.results;
  return moviesArray;
}

const renderMovies = (movie, i) =>
  (<div key={i} id="movie">
    <div className="movie--card">
      <img src={poster + movie.poster_path} alt={`Poster for the movie ${movie.title}`}></img>
      <div className="movie--info">
      <span className="movie-average"><FaHeart/></span>
        <span className="movie-average"><FaStar />
          <span className="movie-rating">{movie.vote_average}</span>
        </span>
      </div>
    </div>
  </div>);



class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSortDate = (event) => {
    this.setState({movieList: this.props.movieList.sort(dynamicSort('release_date'))})
  }

  render() {
    console.log(this.props.movieList)
    console.log('state', this.state)
    return (
      <div className="movies">
      <div className="sort-header">
        <button type="button" className="btn btn-link" onClick={this.toggleSortDate}>Order by release year</button>
        <button type="button" className="btn btn-link">Order by movie name </button>
      </div>
      <div className="movie--list">
        {this.props.movieList.map(renderMovies)}
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  const { movies } = state
  return { movieList: movies.results }
}

export default connect(mapStateToProps)(MoviesList)