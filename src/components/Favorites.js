import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTestData } from '../actions';
//import { requestArtistInfo } from '../actions';


class Favorites extends Component  {

  results = [];
  componentDidMount() {
  this.props.requestTestData();
  }

  render() {
    return (
      <div className="Artist-Info-component">
        favorite works
      </div>
    )

  }
}

const mapStateToProps = state => ({ test_data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestTestData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);