import React, {Component} from 'react'
import { connect } from 'react-redux';
import {dynamicSort} from '../../utils'
import Drawer from '@material-ui/core/Drawer';
import {baseurl} from '../../config/base-url'
import { FaStar } from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import DetailsContent from './details/';
import './styles.scss'

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, movie: {}};
  }

  renderMovies = (movie, i) => {

    return <div key={i} id="movie" onClick={() => this.setState({movie: movie, open: true})}>
      <div className="movieseries--card">
        <img src={`${baseurl.poster}${movie.poster_path}`} alt={`Poster for the movie ${movie.title}`}></img>
        <div className="movieseries--info">
          <span className="movieseries-average">
            <span className={"isFavorite "}><FaHeart />
            </span>
          </span>
          <span className="movieseries-average"><FaStar />
            <span className="movieseries-rating">{movie.vote_average}</span>
          </span>
        </div>
      </div>
    </div>
  };

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
        {this.props.movieList.map(this.renderMovies)}
        </div>
        <Drawer anchor="right" open={this.state.open} onClick={() => this.setState({open: false})}
          onKeyDown={() => this.setState({open: false})}>
          <DetailsContent title={this.state.movie.title} imgSrc={`${baseurl.poster}${this.state.movie.poster_path}`} year={this.state.movie.release_date} id={this.state.movie.id} media='movies'
          onClick={() => this.setState({open: false})}
          onKeyDown={() => this.setState({open: false})}/>
        </Drawer>
    </div>
    )
  }
}
function mapStateToProps(state) {
  const { movies } = state
  return { movieList: movies.results.sort(dynamicSort('title')) }
}

export default connect(mapStateToProps)(MoviesList)