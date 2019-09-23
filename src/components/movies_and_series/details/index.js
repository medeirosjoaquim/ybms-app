import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {requestMovieDetails} from '../../../actions';
import {castMap, runTime} from './utils';
import './styles.scss';
import {apiKey} from '../../../sagas/api';

class DetailsContent extends Component {
  cast = {};
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {}
    }
  }
  componentDidMount() {
    if (this.props.media === 'movies') {
      fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apiKey}&append_to_response=credits,reviews`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    } else if (this.props.media === 'tv') {
      fetch(`https://api.themoviedb.org/3/tv/${this.props.id}?api_key=${apiKey}&append_to_response=credits,reviews`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

  }

  render() {
    if (this.state.isLoaded) {
      this.cast = this.state.items.credits.cast;
      if (this.props.media === 'movies') {
        return (
          <div className="details--container">
            <div className="details--poster">
              <img src={this.props.imgSrc} alt="" />
            </div>
            <div className="details--title Title-1">              {this.props.title}({this.props.year})
          </div>
            <div className="details--details">
              <p className="details--description">
                {this.props.description}
              </p>
              <div className="details--cast">

                {this.cast.map(castMap)}
              </div>
              <div><h5>Total runtime {runTime(this.state.items.runtime)}</h5></div>
              <div></div>
            </div>
          </div>
        );
      } else if (this.props.media === 'tv') {
        return (
          <div className="details--container">
            <div className="details--poster">
              <img src={this.props.imgSrc} alt="" />
            </div>
            <div className="details--title Title-2">              {this.props.title}({this.props.year})
          </div>
            <div className="details--details">
              <p className="details--description">
                {this.props.description}
              </p>
              <div className="details--cast">

                {this.cast.map(castMap)}
              </div>
              <div><h5>Episode average runtime {runTime(this.state.items.episode_run_time.reduce((prev, curr) => prev + curr) / this.state.items.episode_run_time.length)}</h5></div>
              <div></div>
            </div>
          </div>
          );
      }

    } else {
      return (<div className="text-center h5">Loading</div>);
    }

  }
}


DetailsContent.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  media: PropTypes.string
};

function mapStateToProps(state) {
  const {movieDetails} = state;
  return {movieDetails: movieDetails};
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestMovieDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContent)