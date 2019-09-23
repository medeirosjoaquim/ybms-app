import React, {Component} from 'react'
import { connect } from 'react-redux';
import {dynamicSort} from '../../utils'
import Drawer from '@material-ui/core/Drawer';
import {baseurl} from '../../config/base-url'
import { FaStar } from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';

import './styles.scss'

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, id: ''};
  }

  renderMovies = (movie, i) =>
  (<div key={i} id="movie" onClick={() => this.setState({id: movie.id, open: true})}>
    <div className="movieseries--card">
      <img src={`${baseurl.poster}${movie.poster_path}`} alt={`Poster for the movie ${movie.title}`}></img>
      <div className="movieseries--info">
      <span className="movieseries-average"><FaHeart/></span>
        <span className="movieseries-average"><FaStar />
          <span className="movieseries-rating">{movie.vote_average}</span>
        </span>
      </div>
    </div>
  </div>);


  handleToggle = () => this.setState({open: !this.state.open});

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
        <Drawer anchor="right" open={this.state.open} width={'300'} className="aaaa" >
          <div  onClick={() => this.setState({open: false})}
          onKeyDown={() => this.setState({open: false})}>aaaaaa</div>
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