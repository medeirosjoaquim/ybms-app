import React, {Component} from 'react'
import {baseurl} from '../../config/base-url'
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {dynamicSort} from '../../utils'

import './styles.scss'

const {poster} = baseurl;

const renderSeries = (serie, i) =>
  (<div key={i} id="movie">
    <div className="movieseries--card">
      <img src={poster + serie.poster_path} alt={`Poster for the tv show ${serie.original_name}`}></img>
      <div className="movieseries--info">
      <span className="movieseries-average"><FaHeart/></span>
        <span className="movieseries-average"><FaStar />
          <span className="movieseries-rating">{serie.vote_average}</span>
        </span>
      </div>
    </div>
  </div>);

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSortByDate = () => {
    this.setState({seriesList: this.props.seriesList.sort(dynamicSort('first_air_date'))})
  }

  toggleSortByTitle = () => {
    this.setState({seriesList: this.props.seriesList.sort(dynamicSort('original_name'))})
  }

  render() {
    return (
      <div className="movieseries">
      <div className="sort-header">
        <button type="button" className="btn btn-link" onClick={this.toggleSortByDate}>Order by release year</button>
        <button type="button" className="btn btn-link"onClick={this.toggleSortByTitle}>Order by title </button>
      </div>
      <div className="movieseries--list">
        {this.props.seriesList.map(renderSeries)}
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  const { series } = state
  return { seriesList: series.results.sort(dynamicSort('title')) }
}

export default connect(mapStateToProps)(MoviesList)