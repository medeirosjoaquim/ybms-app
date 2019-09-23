import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {requestMovieDetails } from '../../../actions'
import './styles.scss'
import {apiKey} from '../../../sagas/api'

class DetailsContent extends Component {
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apiKey}&append_to_response=credits,reviews`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
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
    console.log(this.state);
    return (
      <div className="details--container">
        <div className="details--poster">
          <img src={this.props.imgSrc} alt=""/>
        </div>
        <div className="details--title Title-1">              {this.props.title}({this.props.year})
        </div>
        <div className="details--details">
          <p className="details--description">

          </p>
          <ul>
            <li>year</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
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