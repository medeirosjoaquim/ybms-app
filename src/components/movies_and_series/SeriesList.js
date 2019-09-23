import React, {Component} from 'react'
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {dynamicSort} from '../../utils'
import Drawer from '@material-ui/core/Drawer';
import {baseurl} from '../../config/base-url'
import DetailsContent from './details/';

import './styles.scss'

const {poster} = baseurl;


class SeriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, serie: {}};
  }

  renderSeries = (serie, i) =>
  (<div key={i} id="movie" onClick={() => this.setState({serie: serie, open: true})}>
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
        {this.props.seriesList.map(this.renderSeries)}
        </div>
        <Drawer anchor="right" open={this.state.open} onClick={() => this.setState({open: false})}
          onKeyDown={() => this.setState({open: false})}>
          <DetailsContent title={this.state.serie.original_name} imgSrc={`${baseurl.poster}${this.state.serie.poster_path}`} year={this.state.serie.first_air_date} id={this.state.serie.id} media='tv'
          onClick={() => this.setState({open: false})}
          onKeyDown={() => this.setState({open: false})}/>
        </Drawer>
    </div>
    )
  }
}
function mapStateToProps(state) {
  const { series } = state
  return { seriesList: series.results.sort(dynamicSort('title')) }
}

export default connect(mapStateToProps)(SeriesList)