import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss'


class DetailsContent extends Component {
  render() {
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
  descriptiion: PropTypes.string
};

function mapStateToProps(state) {
  const {movieDetails} = state
  return movieDetails;
}

export default connect(mapStateToProps)(DetailsContent)