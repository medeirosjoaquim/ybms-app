import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {requestMovieDetails} from '../../../actions';
import {castMap} from './utils';
import './styles.scss';
import {apiKey} from '../../../sagas/api';
import {baseurl} from '../../../config/base-url'
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

    fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apiKey}&append_to_response=credits,reviews`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    if (this.state.isLoaded) {
      this.cast = this.state.items.credits.cast;
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
            <ul>
              {this.cast.map(castMap)};
            <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (<div>wait</div>);
    }

  }
}


DetailsContent.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number
};

function mapStateToProps(state) {
  const {movieDetails} = state;
  return {movieDetails: movieDetails};
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestMovieDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContent)