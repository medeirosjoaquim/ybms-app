import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { requestArtistInfo } from '../actions';
import { requestTestData } from '../actions';


class About extends Component  {

  results = [];
  componentDidMount() {
  //  this.props.requestArtistInfo();
  }

  render() {
    return (
      <div className="Artist-Info-component">
        about works
      </div>
    )

  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestTestData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);