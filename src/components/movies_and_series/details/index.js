import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DetailsContent extends Component {
  render() {
    return (
      <div>
          {this.props.teste}
      </div>
    );
  }
}


DetailsContent.propTypes = {
  teste: PropTypes.string,
};

export default DetailsContent;
