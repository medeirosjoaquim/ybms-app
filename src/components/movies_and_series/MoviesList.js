import React, {Component} from 'react'
import {baseurl} from '../../config/base-url'
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {dynamicSort} from '../../utils'

import './styles.scss'

const {poster} = baseurl;

const renderMovies = (movie, i) =>
  (<div key={i} id="movie">
    <div className="movieseries--card">
      <img src={poster + movie.poster_path} alt={`Poster for the movie ${movie.title}`}></img>
      <div className="movieseries--info">
      <span className="movieseries-average"><FaHeart/></span>
        <span className="movieseries-average"><FaStar />
          <span className="movieseries-rating">{movie.vote_average}</span>
        </span>
      </div>
    </div>
  </div>);

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSortByDate = (event) => {
    this.setState({movieList: this.props.movieList.sort(dynamicSort('release_date'))})
  }

  toggleSortByTitle = (event) => {
    this.setState({movieList: this.props.movieList.sort(dynamicSort('title'))})
  }

  render() {
    return (
      <div className="movieseries">
      <div className="sort-header">
        <button type="button" className="btn btn-link" onClick={this.toggleSortByDate}>Order by release year</button>
        <button type="button" className="btn btn-link"onClick={this.toggleSortByTitle}>Order by title </button>
      </div>
      <div className="movieseries--list">
        {this.props.movieList.map(renderMovies)}
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  const { movies } = state
  return { movieList: movies.results.sort(dynamicSort('title')) }
}

export default connect(mapStateToProps)(MoviesList)